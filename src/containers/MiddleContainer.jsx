import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './MiddleContainer.css';
import PlayerInfo from '../components/PlayerInfo';
import ItemsShowcase from '../components/ItemsShowcase';

function MiddleContainer() {

    return(
        <div className='middle-container'>
            <PlayerInfo />
            <ItemsShowcase />
        </div>
    )
}
export default MiddleContainer;