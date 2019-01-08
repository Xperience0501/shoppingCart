import React from 'react';

import './ShoppingCart.css';

import minusActiveIcon from '../src/icon/minus-active.png';
import minusIcon from '../src/icon/minus.png';
import plusIcon from '../src/icon/plus.png';

const Controller = props => {
    return (
        <div className="controller">        
            {props.currentItemCount ? <img className="Pointer" onClick={props.dec} src={minusActiveIcon} alt="minus active button"></img> : <img src={minusIcon} alt="minus button"></img>}
            <p className="quantity Grey">{props.currentItemCount ? props.currentItemCount : 0}</p>                            
            <img className="Pointer"  onClick={props.inc} src={plusIcon} alt="plus button"></img>
        </div>
    )
}

export default Controller