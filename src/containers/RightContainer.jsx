import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './RightContainer.css';
import items from '../util/items.js'

function RightContainer() { 
    console.log(items);

    return(
        <div className='right-container'>
            <header>
                <h1 className="title">Bubble Tea</h1>
                <strong> no refunds </strong>
            </header>

            {items.map( (item, index) => (
                <div key={index} className="item-container"> 
                    <img
                        src={item.image}
                        draggable={false}
                        className="item-image"
                        alt="logo"
                    />
                    <div> {item.name} </div>
                
                </div>
            ))}
        </div>
    )
}
export default RightContainer;