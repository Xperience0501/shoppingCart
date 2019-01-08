import React from 'react';

import './Gift.css';
import GiftImg from '../src/images/stick.png';

const Gift = props => {
    return (
        <div className="giftContainer">
            <div className="imageBox">
                <img src={GiftImg} alt={props.giftProps.name}></img>
            </div>
            <div className="textAlignLeft">
                <p className="GiftTag">GIFT</p>
                <p className="Bold">{props.giftProps.name}</p>
                <p className="Grey">{props.giftProps.desc}</p>
            </div>
            <div className="Grey">
                <p>{props.giftProps.price} $</p>
            </div>
            <div className="Grey">
                <p>1</p>
            </div>
        </div>
    )
}

export default Gift