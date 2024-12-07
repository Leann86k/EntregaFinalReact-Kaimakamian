import React from "react";
import style from "./item.module.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <img src={item.imagen} alt="Imagen de ejemplo" />
        <div className={style.cardContent}>
          <h2 className={style.cardTitle}>{item.title}</h2>
          <p className={style.cardText}>{item.description}</p>
          <p> ${item.price}</p>
          <Link to={`/item/${item.id}`}>Ver más</Link>
          {/* <a href="" className={style.cardButton}>
            <span>Ver más</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
