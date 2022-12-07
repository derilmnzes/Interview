import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getProductDetails } from "../Api/Api";
import CreateContext from "../Context/CreateContext";

const ProductDetail = () => {
  const details = useLoaderData();
  const c = useContext(CreateContext);
  const Cart = c.Cart;
 
  const check =  Cart.filter((item) => item.id === details.id);

  const handleClick = () => {
    console.log(!check.length > 0);
    if (!check.length > 0) {
      c.setCart([...Cart, details]);
    } else {
      const index = Cart.findIndex((x) => x.id === details.id);
      Cart.splice(index,1);

      c.setCart([...Cart]);
    }
  };
  return (
    <div className="product">
      <div className="product_image">
        <img src={details.image} alt="" />
      </div>
      <div className="product_description">
        <h1>{details.title}</h1>
        <p>{details.description}</p>
      <div className="buttons">
       <Link to="/">
       <button className="button">
            Back
        </button></Link>
        {check.length > 0 ? (
          <button className="button" onClick={handleClick}>Remove</button>
        ) : (
          <button  className="button" onClick={handleClick}>Add To Cart</button>
        )}
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export function productDetailLoader({ params }) {
  const id = params.id;
  return getProductDetails(id);
}
