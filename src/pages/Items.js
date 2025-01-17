import styles from "../styles/Products.module.css";
import ItemCard from "./ItemCard";
import { useValue } from "../productContext";
function Items() {
  const {items,search} = useValue()
  return (
    <div className={styles.wrapper}>
          {search.length > 0 ? items.map((item) => {
            if(item.name.toLowerCase().includes(search.toLowerCase())){
              // console.log(item.name, search)
              return <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
            }
}): items.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Items;
