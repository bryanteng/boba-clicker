import React from "react";
import ItemCard from "../components/ItemCard";
import "./RightContainer.css";
import items from "../util/items.js";

function RightContainer() {
  return (
    <div className="right-container">
      <header>
        <h1 className="title">Shop</h1>
        <strong> no refunds </strong>
      </header>

      {items.map((item, index) => (
        <ItemCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}
export default RightContainer;
