// add header to link to other sites, open settings modal
import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <span id="menu-button" className="menu-button">
        {" "}
        //{" "}
      </span>

      <span className="settings-button"> * </span>
    </header>
  );
}

export default Header;
