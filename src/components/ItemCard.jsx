import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './ItemCard.css';
import { updateItemAmount } from '../redux/userSlice';
import { decrementByAmount, incrementBPS } from '../redux/bobaSlice';

function ItemCard({ item, index }) {
    const dispatch = useDispatch();
    const itemAmount = useSelector(state => state.user.items[index].amount);
    const bobaCount = useSelector(state => state.boba.bobaCount);
    
    const [ cost, setCost ] = useState(item.baseCost);

    useEffect(() => {
        if(itemAmount == 0) return; 
        console.log(itemAmount, item.increment, item.baseCost);
        setCost(item.baseCost + (itemAmount * item.increment));
    }, [itemAmount]);


    const handleBuy = () => {
        if(cost < bobaCount) {
            dispatch(decrementByAmount(cost));
            dispatch(updateItemAmount(index));
            dispatch(incrementBPS(item.bps));
        } else {
            alert("Not enough boba!");
        }   

    }

    return (
        <div className='item-card' onClick={handleBuy}>
            <img
                src={item.image}
                draggable={false}
                className="item-image"
                alt="logo"
            />
            <div className="item-info"> 
                <div className="item-name"> {item.name} </div>
                <div className="item-price"> {cost} </div>
            </div>
            <div className="item-amount"> {itemAmount} </div>
        </div>
    )
}

export default ItemCard;