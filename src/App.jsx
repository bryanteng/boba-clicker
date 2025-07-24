import React, { useState, useEffect } from 'react';
import LeftContainer from './containers/LeftContainer';
import MiddleContainer from './containers/MiddleContainer';
import RightContainer from './containers/RightContainer';
import Monster from './components/Monster';
import NotificationsContainer from './containers/NotificationsContainer';
import Header from './containers/Header';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { updateTimePlayed, updateUserState, updateMonstersSeen } from './redux/userSlice';
import { incrementByAmount, updateBobaState } from './redux/bobaSlice';
import { addNotification } from './redux/notificationSlice';

function App() {
  const bps = useSelector(state => state.boba.bps);
  const dispatch = useDispatch();
  const [spawnMonster, setSpawnMonster] = useState(false);

  useEffect(() => {
    const save_file = localStorage.getItem('boba_clicker')
    const { boba, user } = JSON.parse(save_file || '{}')

    if (save_file) {
      console.log("Loaded save file:", save_file)
      dispatch(updateBobaState(boba))
      dispatch(updateUserState(user))
      dispatch(addNotification({
        type: 'info',
        message: 'Welcome back! Your game has been loaded from the save file.',
        autoClose: 10000
      }))
    } else {
      console.log(`Save file not found: ${save_file}`)
      console.log("No save file found, starting fresh.")
      dispatch(addNotification({
        type: 'info',
        message: 'Welcome to the game! Click the boba to start earning boba!'
      }))
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(incrementByAmount(bps/10))
      dispatch(updateTimePlayed(100)); // Increment time played by 0.1 seconds
    }, 100);

    const interval2 = setInterval(() => {
      setSpawnMonster(true);
      dispatch(updateMonstersSeen());
    }, 300000);
    return () =>{ 
      clearInterval(interval)
      clearInterval(interval2);
    };
  } );

  return (
    <>
      <Header />
      <div className="App">
        <LeftContainer />
        <MiddleContainer />
        <RightContainer />
        <Monster spawnMonster={spawnMonster} setSpawnMonster={setSpawnMonster} />
        <NotificationsContainer />
      </div>
    </>
  );
}

export default App;
