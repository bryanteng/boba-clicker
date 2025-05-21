import React, { useEffect } from 'react';
import './App.css';
import LeftContainer from './containers/LeftContainer';
import MiddleContainer from './containers/MiddleContainer';
import RightContainer from './containers/RightContainer';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './redux/bobaSlice';

function App() {

  const bps = useSelector(state => state.boba.bps);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(incrementByAmount(bps));
    }, 1000);

    return () => clearInterval(interval);
  } );

  return (
    <div className="App">
      <LeftContainer />
      <MiddleContainer />
      <RightContainer />
    </div>
  );
}

export default App;
