import React from 'react';

import './ShoppingCart.css';

import EarphoneImg from '../src/images/earphone.png';
import PhoneImg from '../src/images/phone.png';

const Product = props => {
    return (
        <div className="Product">
            <div className="imageBox">
                {props.name === "Earphones" ? <img src={EarphoneImg} alt="EarphoneImg"></img> : <img src={PhoneImg} alt="PhoneImg"></img>}
            </div>
            <div className="textAlignLeft leftPadding">
                {props.tagline ? <p className="CashBack">{ props.tagline}</p> : null}
                <p className="Bold">{props.name}</p>
                <p className="Grey">{props.desc}</p>
                {props.planLink ? <a href={props.planLink} className="Link">View Plans</a> : null }
            </div>
        </div>
    )
}

export default Product