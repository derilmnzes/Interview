import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { getAllProductsBYCategory } from "../Api/Api";
import Card from "../Components/Card";
import CreateContext from "../Context/CreateContext";

const CategoriesList = () => {
  const listItems = useLoaderData();
  const c = useContext(CreateContext);

  useEffect(() => {
    c.setListItems(listItems);
  }, [listItems]);

  return (
    <div className="cards_wrapper">
      {c.ListItems.map((item, index) => (
        <Card id={item.id} image={item.image} name={item.title} />
      ))}
    </div>
  );
};

export default CategoriesList;

export function categoryListLoader() {
  return getAllProductsBYCategory("electronics");
}
