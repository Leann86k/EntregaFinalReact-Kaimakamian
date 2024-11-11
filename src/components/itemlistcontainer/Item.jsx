import React from "react";
import { getProducts } from "../../products";
import style from "./item.module.css";

const Item = ({ item }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <img src={item.imagen} alt="Imagen de ejemplo" />
        <div className={style.cardContent}>
          <h2 className={style.cardTitle}>{item.title}</h2>
          <p className={style.cardText}>{item.description}</p>
          <p> ${item.price}</p>
          <a href="#" className={style.cardButton}>
            <span>Ver más</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
