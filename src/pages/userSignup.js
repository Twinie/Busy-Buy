import { useValue } from "../productContext";

// Importing toastify module
import { ToastContainer } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Navbar.module.css";

// toast-configuration method,
// it is compulsory method.
// toast.configure();

export default function Signup(){
    const {signupData, setsignupData, handleSignUpSubmit, titleRef} = useValue()

    return(
        <>
        <div className={styles.signinFrom}>
        <h1>Sign Up!</h1>
        
        {/* Form for signup */}
            <form onSubmit={handleSignUpSubmit}>
                <Row formLabel="Name">
                        <input className="input name"
                                placeholder="Enter Name"
                                ref = {titleRef}
                                required
                                value={signupData.name}
                                onChange = {(e) => setsignupData({name: e.target.value, email:signupData.email, password: signupData.password})}
                        />
                </Row >

                <Row formLabel="Email">
                        <input className="input content"
                                placeholder="Enter Email"
                                required
                                value={signupData.email}
                                onChange = {(e) => setsignupData({name: signupData.name,email: e.target.value, password: signupData.password})}
                        />
                </Row >
         
                <Row formLabel="Password">
                        <input className="input password"
                                placeholder="Enter Password"
                                required
                                value={signupData.password}
                                onChange = {(e) => setsignupData({name: signupData.name,email:signupData.email , password: e.target.value})}
                        />
                </Row >
                <br/>
                <br/>
                <div className={styles.signBtn}>
                    <button className={styles.button}>Sign Up</button>
                </div>
            </form>
                     
        </div>
        <ToastContainer />
        </>
        )
    }
    //Row component to introduce a new row section in the form
function Row(props){
    const{formLabel} = props;
    return(
        <>
        <label>{formLabel}<br/></label>
        <br/>
        {props.children}
        <br/><br/>
        </>
    )
}