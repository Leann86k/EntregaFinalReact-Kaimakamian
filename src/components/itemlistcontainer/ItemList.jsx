import React from "react";
import Item from "./Item";
import style from "./ItemList.module.css";

const ItemList = ({ product }) => {
  return (
    <div className={style.cardOrder}>
      {product.map((prod) => {
        return <Item key={prod.id} item={prod} />;
      })}
    </div>
  );
};

export default ItemList;
