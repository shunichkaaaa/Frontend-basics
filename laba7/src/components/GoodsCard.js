import React from "react";
import { Items } from "./GoodsData";
import "../styles/GoodsCard.css";

const GoodsCard = () => {
  return (
    <>
      <div className="title">Новинки</div>
      <div className="container">
        {Items.map((data) => (
          <GoodCard info={data} key={data.article} />
        ))}
      </div>
    </>
  );
};

const GoodCard = ({ info }) => {
  const { image, name, price } = info;

  return (
    <div className="Item">
      <div className="image-container">
        <img className="image" src={image} alt="Продукт" />
      </div>
      <div className="item">
        <p>{name}</p>
        <p>{price} грн</p>
      </div>
    </div>
  );
};

export default GoodsCard;
