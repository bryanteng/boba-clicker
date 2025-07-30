import React from "react";
import PlayerInfo from "../components/PlayerInfo";
import ItemsShowcase from "../components/ItemsShowcase";
import "./MiddleContainer.css";

function MiddleContainer() {
  return (
    <div className="middle-container">
      <PlayerInfo />
      <ItemsShowcase />
    </div>
  );
}
export default MiddleContainer;
