import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
