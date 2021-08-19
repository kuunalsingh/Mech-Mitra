import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data
    dispatch({
      type: "Book",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>
          <strong>{title}</strong>
          <small>{price}</small>
        </p>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Book</button>
    </div>
  );
}

export default Product;
