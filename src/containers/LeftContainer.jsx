import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './LeftContainer.css';
import BobaPearls from '../components/BobaPearls';
// import ClickText from '../components/ClickText';
import { increment, decrementByAmount, incrementTotalClicks } from '../redux/bobaSlice';

function LeftContainer() {
    const bobaCount = useSelector(state => state.boba.bobaCount);
    const bps = useSelector(state => state.boba.bps);
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    // TODO: floating +1 text 
    const handleBobaClick = (event) => {
        dispatch(incrementTotalClicks());
        const id = crypto.randomUUID();

        console.log(id)
        // need to create a container for clicktext, similar to notification container 
        // img component for boba, rewrite needed. import new component that will also hold clicktext array? 
        // <ClickText location ={{ x: event.clientX, y: event.clientY }} />
    }

  return (
    <div className='left-container'>
      <header className="header">
        <div> {name}'s Boba Store </div>
        <div> boba: {bobaCount.toLocaleString()} </div>
        <div> bps: {bps.toLocaleString()} </div>
        <img
          src={"/images/boba_pearl.webp"}
          draggable={false}
          className="App-logo"
          alt="logo"
          onClick={handleBobaClick}
        />
        <button onClick={() => dispatch(increment())}>Add Boba</button>
        <button onClick={() => dispatch(decrementByAmount(1))}>Remove Boba</button>
      </header>

      <div className="wave"></div>
      <div className="tea-fill">
        <BobaPearls count={bobaCount} />
      </div>
    </div>
  );
}

export default LeftContainer;
