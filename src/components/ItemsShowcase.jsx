import React from "react";
import "./ItemsShowcase.css";

// show items in a grid with counts and upgrades bought
function ItemsShowcase({ items }) {
  return (
    <div className="items-showcase">
      <div> items showcase </div>
      {/* {items.map((item, index) => (
                <div key={index} className="item-card">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))} */}
    </div>
  );
}
export default ItemsShowcase;
