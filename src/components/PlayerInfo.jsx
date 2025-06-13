import React from 'react';
import './PlayerInfo.css';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlayerName } from '../redux/userSlice';
import SaveButton from './SaveButton';

function PlayerInfo() {
    const dispatch = useDispatch();
    const totalClicks = useSelector(state => state.boba.totalClicks);
    const totalBoba = useSelector(state => state.boba.totalBoba);
    const playerName = useSelector(state => state.user.name);

    const changePlayerName = (e) => {
        dispatch(updatePlayerName(e.target.value));
    }
    return (
        <div className='player-info'>
            Player Info
            <br/>
            <input onChange={changePlayerName} placeholder="Player Name" value={playerName} />
            <div> lifetime clicks: {totalClicks} </div>
            <div> lifetime boba: {totalBoba.toFixed(2)} </div>
            <SaveButton />
        </div>
    )
}

export default PlayerInfo;