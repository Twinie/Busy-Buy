import { createContext, useState, useContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";

//Import all the required functions from fireStore
import { collection, onSnapshot, addDoc, updateDoc,deleteDoc, doc} from "firebase/firestore"; 

//Import fireStore reference from frebaseInit file
import db from "./firebase";

export const productContext = createContext();

function CustomProductContext({ children }) {
  const [total, setTotal] = useState(0); // total price of the products added in cart
  const [items, setItems] = useState([]); //for the products on home page
  const [cart, setCart] = useState([]); // for the products added to cart
  const [search, setSearch] = useState("")

  //SIGNIN VARIABLES
  const [users, setUsers] =  useState([]);
  const [signinData, setSigninData] = useState({email:"", password: ""})
  const [login, setLogin] = useState(false);

  //SIGNUP VARIABLES
  const [signupData, setsignupData] = useState({name:"", email:"", password: ""})


  // to get real time users
  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapShot)=> {
 const users = snapShot.docs.map((doc) => {
            return{
                id: doc.id,
                ...doc.data()
            }
        })
        // console.log(users);
        setUsers(users);        
    })
},[]);

//to get real time items/products
useEffect(() => {
    onSnapshot(collection(db, "items"), (snapShot)=> {
 const items = snapShot.docs.map((doc) => {
            return{
                id: doc.id,
                ...doc.data()
            }
        })
        // console.log(items);
        setItems(items);        
    })
},[]);

//to get real time cart items
useEffect(() => {
    onSnapshot(collection(db, "cart"), (snapShot)=> {
 const cart = snapShot.docs.map((doc) => {

            return{
                id: doc.id,
                ...doc.data()
            }
            // return doc.data()
        })
        // console.log(items);
        setCart(cart);        
    })
},[]);

useEffect(()=> {
onSnapshot(collection(db, "cart"), (snapShot)=> {
    let totalPrice = 0

//  const cartTotal = 
 snapShot.docs.map((doc) => {
    // console.log(doc.data().price )
            totalPrice += (doc.data().price*doc.data().qty);
            return totalPrice 
            // return doc.data()
        })
        // console.log(items);
        setTotal(totalPrice);        
    })
},[cart])

const titleRef = useRef(null);
// useEffect(()=>{
//     titleRef.current.focus();
// },[])

const logout = () => {
    setLogin(false)
}

const notify = () => {
    // Calling toast method by passing string
    toast("Email and password invalid");
};

const notifyUserAdded = () => {
    // Calling toast method by passing string
    toast("User Added");
};

const notifyInvalidUser = () => {
    // Calling toast method by passing string
    toast("Invalid user credentials");
};

const notifyUserLoggedIn = () => {
    // Calling toast method by passing string
    toast("User Logged in");
}

//submit for sign up
async function handleSignUpSubmit(e){
    // console.log(signupData)
    e.preventDefault();

    const presentUser =  users.find((user)=>user.email === signupData.email)

    console.log(signupData.email, presentUser)
    //add new user id emailId is not present
    if(!presentUser){
        await addDoc(collection(db, "users"), {
            name: signupData.name,
            email: signupData.email,
            password: signupData.password,
            createdOn: new Date()
        });
        notifyUserAdded()
    }else{
        // console.log("Already registered")
        notify()
    }
    titleRef.current.focus();
    //to make the inputs empty
    setsignupData({name: "", email: "", password: ""});
}

//submit for sign in
function handleSubmit(e){
    // console.log(signupData)
    e.preventDefault();

    const presentUser = users.find((user)=>user.email === signinData.email && user.password === signinData.password);
    if(presentUser){
        // console.log(presentUser)
        setLogin(true)
        // console.log(login)
        notifyUserLoggedIn()
    }
    else{
        notifyInvalidUser()
    }
    titleRef.current.focus();
    //to make the inputs empty
    setSigninData({email: "", password: ""});
    // setLogin(true)
}

//add products to cart
 const handleAdd = async(prod) => {
    const prodFound = cart.find((item) => item.index === prod.id);
    // console.log(prodFound.index,prod.id)
    if (!prodFound) {
        await addDoc(collection(db, "cart"), {
            index: prod.id,
            name: prod.name,
            price: prod.price,
            image: prod.image,
            qty: 1,
        });
    //   setCart([...cart, { ...prod, qty: 1 }]);
      console.log(cart);
      setTotal(total + prod.price);
    } else {
    const docRef = doc(db, 'cart', prodFound.id);

    // Update the timestamp field with the value from the server
    await updateDoc(docRef, {
        qty: prodFound.qty++,
    });
    setTotal(total + prodFound.price*prodFound.qty);
    }
  };

//remove products from cart
const handleRemove = async(id) => {
    const prodFound = cart.find((item) => item.index === id);

    if (prodFound) {
        if(prodFound.qty > 1){
            const docRef = doc(db, 'cart', prodFound.id);

            // Update the timestamp field with the value from the server
            await updateDoc(docRef, {
                qty: prodFound.qty--,
            });
            setTotal(total-prodFound.price)
        }else if(prodFound.qty === 1){
            await deleteDoc(doc(db, "cart", prodFound.id));
        }else{
            return
        }
    }
  };

  return (
    <productContext.Provider
      value={{items, login, setLogin, titleRef, notify, handleSubmit, signinData, setSigninData, cart, total,
        handleSignUpSubmit, setsignupData, signupData, logout, handleAdd, handleRemove, search, setSearch}}>
      {children}
    </productContext.Provider>
  );
}
function useValue() {
    const value = useContext(productContext);
    // console.log(value)
      return value;
  }

export { useValue, CustomProductContext };
