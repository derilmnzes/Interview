import React from "react";
import { useContext } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getAllProductsBYCategory, getCategory } from "../Api/Api";
import CreateContext from "../Context/CreateContext";
import { ReactComponent as Cart } from "../Assets/icons/cart.svg";
import { ReactComponent as ReactSvg } from "../Assets/icons/react.svg";
import { ReactComponent as Close } from "../Assets/icons/close.svg";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Layout = ({ children }) => {
  const category = useLoaderData();
  const [show, setShow] = useState(false);
  const location = useLocation();

  const c = useContext(CreateContext);
  const total = c.Cart.reduce((partialSum, a) => partialSum + a.price, 0);

  const [filterName, setFiltername] = useState("");

  const filterData = c.ListItems.filter((item) => {
    return item.title.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
  });

  const handleChange = async (e) => {
    c.setCategory(e.target.value);
    c.setListItems(await getAllProductsBYCategory(e.target.value));
  };

  const handleClick = (id) => {
  
    const index = c.Cart.findIndex((x) => x.id === id);
    c.Cart.splice(index, 1);
    if (!c.Cart.length > 0) {
      setShow(false);
    }
    c.setCart([...c.Cart]);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <ReactSvg />
        </Link>
      </div>
      <div className="filter">
        <div className="search" style={{ position: "relative" }}>
          <input
            onChange={(e) => setFiltername(e.target.value)}
            placeholder="search..."
            value={filterName}
          />
          <ul className="autocomplete">
            {filterName.length > 0 &&
              filterData.map((item, index) => (
                <Link key={index}
                  onClick={() => setFiltername("")}
                  to={`${item.category}/${item.id}`}
                >
                  <li>{item.title}</li>
                </Link>
              ))}
          </ul>
        </div>

        <div className="selector">
          {location.pathname === "/" && (
            <select onChange={(e) => handleChange(e)}>
              {category.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="cart">
        {!show ? (
          <Cart onClick={() => setShow(true)} />
        ) : (
          <Close onClick={() => setShow(false)} />
        )}
        <span>{c.Cart.length}</span>

        {show && (
        <div className="cart_list">
          {c.Cart.map((item, index) => (
            <li key={index}>
              <div className="overlipse">{item.title}</div>
              <b>{item.price}</b>
              <Close
                onClick={() => handleClick(item.id)}
                style={{ width: "15px" }}
              />
            </li>
          ))}
          <b>Total : {total}</b>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default Layout;

export function categoryloader() {
  return getCategory();
}
