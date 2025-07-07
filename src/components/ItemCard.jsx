import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateItemAmount } from '../redux/userSlice';
import { decrementByAmount, incrementBPS } from '../redux/bobaSlice';
import { addNotification } from '../redux/notificationSlice';
import './ItemCard.css';
import { defaultImage } from '../util/items';

function ItemCard({ item, index }) {
    const dispatch = useDispatch();
    const itemAmount = useSelector(state => state.user.items[index].amount);
    const lifetimeBoba = useSelector(state => state.boba.totalBoba);
    const bobaCount = useSelector(state => state.boba.bobaCount);
    
    const [ cost, setCost ] = useState(item.baseCost);

    useEffect(() => {
        if(itemAmount === 0) return; 
        setCost(item.baseCost + (itemAmount * item.increment));
    }, [itemAmount]);

    const handleBuy = () => {
        if(cost < bobaCount) {
            dispatch(decrementByAmount(cost));
            dispatch(updateItemAmount(index));
            dispatch(incrementBPS(item.bps));
        } else {
            dispatch(addNotification({
                type: 'failure',
                message: "You don't have enough boba to buy this item!",
                autoClose: 1000
            }));
        }   
    }

    return (
        lifetimeBoba > item.baseCost ? (
            <div className='item-card' onClick={handleBuy}>
                <img
                    src={item.image}
                    draggable={false}
                    className={`item-image ${item.name}`}
                    alt="logo"
                />
                <div className="item-info"> 
                    <div className="item-name"> {item.name} </div>
                    <div className="item-price"> {cost.toLocaleString()} </div>
                </div>
                <div className="item-amount"> {itemAmount} </div>
            </div>
        ) : lifetimeBoba > item.baseCost/2 ? (
            <div className='item-card disabled'>
                <img
                    src={defaultImage}
                    draggable={false}
                    className={`item-image locked-item`}
                    alt="logo"
                />
                <div className="item-info"> 
                    <div className="item-name"> ??? </div>
                    <div className="item-price"> {cost.toLocaleString()} </div>
                </div>
                <div className="item-amount"> ? </div>
            </div>
        ) : null
    )
}

export default ItemCard;