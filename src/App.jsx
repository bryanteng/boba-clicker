import React, { useState, useEffect } from 'react';
import './App.css';
import LeftContainer from './containers/LeftContainer';
import MiddleContainer from './containers/MiddleContainer';
import RightContainer from './containers/RightContainer';
import { useSelector, useDispatch } from 'react-redux';
import { updateTimePlayed } from './redux/userSlice';
import { incrementByAmount } from './redux/bobaSlice';
import Monster from './components/Monster';

function App() {

  const bps = useSelector(state => state.boba.bps);
  const dispatch = useDispatch();
  const [spawnMonster, setSpawnMonster] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(incrementByAmount(bps/10));
      dispatch(updateTimePlayed(100)); // Increment time played by 0.1 seconds
    }, 100);

    const interval2 = setInterval(() => {
      setSpawnMonster(true);
    }, 300000);
    return () =>{ 
      clearInterval(interval)
      clearInterval(interval2);
    };
  } );

  return (
    <div className="App">
      <LeftContainer />
      <MiddleContainer />
      <RightContainer />
      <Monster spawnMonster={spawnMonster} setSpawnMonster={setSpawnMonster} />
    </div>
  );
}

export default App;
