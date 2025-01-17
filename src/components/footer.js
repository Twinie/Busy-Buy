// import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import logo from "../images/easy-buy-logo.jpg"
// import { useValue } from "../productContext";

function Footer() {
//   const {login, logout,setSearch, search} = useValue();
  // console.log(URL.name)
  return (
    <>
      <div className={styles.footer}>
        <img src={logo} alt="Logo"/>

        <div className={styles.sections}>
        <div className={styles.section1}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    About us
                </li>
                <li className={styles.li}>
                    Contact us
                </li>
                <li className={styles.li}>
                    Careers
                </li>
                <li className={styles.li}>
                    Services
                </li>
            </ul>
        </div>

        <div className={styles.section2}>
        <ul className={styles.ul}>
                <li className={styles.li}>
                    About us
                </li>
                <li className={styles.li}>
                    Contact us
                </li>
                <li className={styles.li}>
                    Careers
                </li>
                <li className={styles.li}>
                    Services
                </li>
            </ul>
        </div>
        </div>

      </div>
    </>
  );
}

export default Footer;