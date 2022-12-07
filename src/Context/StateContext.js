import { useState } from "react";
import CreateContext from "./CreateContext";

const StateContext = (props) => {
  const [cateGory, setCategory] = useState("electronics");
  const [ListItems, setListItems] = useState([]);
  const [Cart, setCart] = useState([]);

  const value = {
    cateGory,
    setCategory,
    ListItems,
    setListItems,
    Cart,
    setCart,
  };
  return (
    <CreateContext.Provider value={value}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default StateContext;
