import { Link } from "react-router-dom";
import { useValue } from "../productContext";
import styles from "../styles/Navbar.module.css";

// Importing toastify module
import { ToastContainer } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

export default function Signin(){

    const {signinData, handleSubmit, titleRef, setSigninData} = useValue();

    return(
        <>
        <div className={styles.signinFrom}>
        <h1>Sign In!</h1>
        {/* Form for signin */}
            <form onSubmit={handleSubmit} >
                <Row formLabel="Email">
                        <input className="input content"
                                placeholder="Enter Email"
                                ref={titleRef}
                                required
                                value={signinData.email}
                                onChange = {(e) => setSigninData({name: signinData.name,email: e.target.value, password: signinData.password})}
                        />
                </Row >
         
                <Row formLabel="Password">
                        <input className="input password"
                                placeholder="Enter Password"
                                required
                                value={signinData.password}
                                onChange = {(e) => setSigninData({name: signinData.name,email:signinData.email , password: e.target.value})}
                        />
                </Row >
                <br/>
                <br/>
                <div className={styles.signBtn}>
                   <button className={styles.button}>Sign In</button>

                   <Link to="/signup" className={styles.signUpBtn} >
                    <h4 >Sign up instead</h4>
                   </Link>
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