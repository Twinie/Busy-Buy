import React from "react";
import { useValue } from "../productContext";
import styles from "../styles/CartModal.module.css";

function CartModal() {
  const { cart, total, handleRemove, login } = useValue();
  console.log(cart)
  return (
    login && <div className={styles.cartModal}>
      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div className={styles.cartCard} key={item.id}>
              <img src={item.image} className={styles.image} alt="product" />
              <h1>{item.name}</h1>
              <h3>X {item.qty} </h3>
              <h3>X {item.qty * item.price}</h3>
             <button
                className={styles.removeBtn}
                onClick={() => handleRemove(item.index)}
              >
                Remove
             </button>
            </div>
          );
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
