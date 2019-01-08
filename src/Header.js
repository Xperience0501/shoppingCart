import React from 'react';

import './Header.css';

import logoImg from '../src/images/logo.png';
import searchIcon from '../src/icon/search.png';
import userIcon from '../src/icon/user.png';
import cartIcon from '../src/icon/shopping.png';

const Header = props => {
    return(
        <div className="Header">
            <div className="navBar">
                <div>
                    <img className="Pointer" src={logoImg} alt="logo"></img>
                </div>
                <div>
                    <span className="alignCenter">
                        <span className="trackOrder Pointer">
                            Track Order
                        </span>
                        <span className="vertical-bar">|</span>
                          <span><img className="Pointer" src={searchIcon} alt="search Icon"></img>
                        </span>
                        <span className="vertical-bar">|</span>
                        <span> <img className="Pointer" src={userIcon} alt="user Icon"></img>
                        </span>
                        <span className="vertical-bar">|</span>
                        <span> <img className="Pointer" src={cartIcon} alt="cart Icon"></img>
                        </span>
                    </span>
                </div>
            </div>
            <div className="paddingTop">
                <div className="justForRef">
                    <span>
                        <span className="radioButton1"></span>
                        <span></span>
                        <span className="radioButton2"></span>
                        <span></span>
                        <span className="radioButton3 Grey"></span>
                    </span>
                </div>
                <div className="navBarLabels">
                    <div className="active">SHOPPING CART</div>
                    <div className="inactive">ORDER DETAILS</div>
                    <div className="inactive">MAKE PAYMENT</div>
                </div>
            </div>
        </div>
    )
}

export default Header