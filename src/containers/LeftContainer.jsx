import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './LeftContainer.css';
import BobaPearls from '../components/BobaPearls';
import { increment, decrementByAmount } from '../redux/bobaSlice';

function LeftContainer() {
    const bobaCount = useSelector(state => state.boba.bobaCount);
    const bps = useSelector(state => state.boba.bps);
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();

  return (
    <div className='left-container'>
      <header>
        <div> {name} </div>
        <div> boba: {bobaCount} </div>
        <div> bps: {bps} </div>
        <img
          src={"/images/boba_pearl.webp"}
          draggable={false}
          className="App-logo"
          alt="logo"
          onClick={() => dispatch(increment())}
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
