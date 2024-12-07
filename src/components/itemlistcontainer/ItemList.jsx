import React from "react";
import Item from "./Item";
import style from "./ItemList.module.css";

const ItemList = ({ productos }) => {
  return (
    <div className={style.cardOrder}>
      {productos.map((prod) => {
        return <Item key={prod.id} item={prod} />;
      })}
    </div>
  );
};

export default ItemList;
