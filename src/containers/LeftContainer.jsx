import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './LeftContainer.css';
import BobaPearls from '../components/BobaPearls';
import { incrementTotalClicks } from '../redux/bobaSlice';
import { defaultImage } from './../util/items.js'

function LeftContainer() {
    const bobaCount = useSelector(state => state.boba.bobaCount);
    const bps = useSelector(state => state.boba.bps);
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    // TODO: add a select to change boba "flavor" for added bonus effects

    const handleBobaClick = (e) => {
        dispatch(incrementTotalClicks());
        const container = document.querySelector('.left-container');
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
      
        const span = document.createElement("span");
        span.className = "floating-plus-one";
        span.textContent = "+1";
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
      
        container.appendChild(span);
      
        setTimeout(() => {
          span.remove();
        }, 600);
    }

  return (
    <div className='left-container'>
      <header className="header">
        <div> {name}'s Boba Store </div>
        <div> boba: {bobaCount.toLocaleString()} </div>
        <div> bps: {bps.toLocaleString()} </div>
        <img
          src={defaultImage}
          draggable={false}
          className="App-logo"
          alt="logo"
          onClick={handleBobaClick}
        />
      </header>

      <div className="wave"></div>
      <div className="tea-fill">
        <BobaPearls count={bobaCount} />
      </div>
    </div>
  );
}

export default LeftContainer;
