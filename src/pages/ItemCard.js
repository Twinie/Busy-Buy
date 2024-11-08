import React from "react";
import styles from "../styles/ProductCard.module.css";
import { useValue } from "../productContext";

function ItemCard({ name, price, image, id }) {
  const { handleAdd } = useValue();

  return (
    <div className={styles.itemCard}>
      <img src={image} className={styles.image} alt="product" />
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.itemButton}
          onClick={() => handleAdd({ id, name, price, image })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
