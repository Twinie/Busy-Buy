import styles from "../styles/Products.module.css";
import ItemCard from "./ItemCard";
import { useValue } from "../productContext";
function Items() {
  const {items,search} = useValue()
  const renderItems = search.length > 0 ? items.filter(item => item.name.includes(search)) : items
  return (
    <div className={styles.wrapper}>
      { renderItems.map(item => 
      <ItemCard
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
      />) 
      }
    </div>
  );
}

export default Items;
