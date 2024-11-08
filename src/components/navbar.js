import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../productContext";

function Navbar() {
  const {login, logout,setSearch, search} = useValue();
  return (
    <>
      <div className={styles.container}>
      <input type="search" id="gsearch" placeholder="Search here.." name="" onChange={(e)=>setSearch(e.target.value)} />

        <Link to="/" className={styles.buttonsWrapper}>
          <h4 className={styles.button}>HOME</h4>
        </Link>

        {login 
      && <Link to="/cart" className={styles.buttonsWrapper}>
          <h4 className={styles.button}>CART</h4>
        </Link>}

        {login? <Link to="/" onClick={logout} className={styles.buttonsWrapper}>
          <h4 className={styles.button}>SIGN OUT</h4>
        </Link> : <Link to="/signin" className={styles.buttonsWrapper}>
          <h4 className={styles.button}>SIGN IN</h4>
        </Link>}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;