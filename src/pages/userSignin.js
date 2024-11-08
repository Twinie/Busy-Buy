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
        <h1>Sign In!</h1>
        <div className="section">

        {/* Form for signin */}
            <form onSubmit={handleSubmit}>
                <Row label="">
                        <input className="input content"
                                placeholder="Enter Email"
                                ref={titleRef}
                                required
                                value={signinData.email}
                                onChange = {(e) => setSigninData({name: signinData.name,email: e.target.value, password: signinData.password})}
                        />
                </Row >
         
                <Row label="">
                        <input className="input password"
                                placeholder="Enter Password"
                                required
                                value={signinData.password}
                                onChange = {(e) => setSigninData({name: signinData.name,email:signinData.email , password: e.target.value})}
                        />
                </Row >
                <br/>
                <br/>
                <button className = "btn">Sign In</button>
                <Link to="/signup" className={styles.buttonsWrapper}>
                    <h4 className={styles.button}>Sign up instead</h4>
                </Link>
            </form>
                     
        </div>
        <ToastContainer />
        </>
        )
    }
    //Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        <br/>
        {props.children}
        </>
    )
}