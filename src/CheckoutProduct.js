import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price }) {
    const [{basket}, dispatch] = useStateValue()
    const remove = () => {
        dispatch({
            type: 'Remove',
            id: id,
        })
    }
  return (
    <div>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <storong>{price}</storong>
        </p>
      </div>
      <div>
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
