import React, { Component } from 'react';

import './ShoppingCart.css';

import Product from './Product';
import Gift from './Gift';
import Controller from './Controller';
import deleteIcon from '../src/icon/DELETE.png';

class ShoppingCart extends Component {
    state = {
        itemCount: 0,
        toalItemsPrice: 0
    }
    shopping = () => {
        const renderedDivs = this.props.itemsInCart.map(item => {
            return (
                <div key={item.id}>
                    <div className="container">
                        <div className="ch45">
                            <Product 
                                name={item.name}
                                desc={item.desc}
                                planLink={item.planLink}
                                tagline={item.tagline} />
                        </div>
                        <div className="Grey ch15">
                            <p>{item.price} $</p>
                        </div>
                        <div className="ch15">
                            <Controller
                                currentItemCount = {this.state.itemCount}
                                inc = {() => this.setState(prevState => { return {itemCount: this.state.itemCount + 1} }, this.props.currItemAdded(item.id))}
                                dec = {() => this.setState(prevState => { return {itemCount: this.state.itemCount - 1} }, this.props.currItemRemoved(item.id))}
                                reduce = {this.props.currItemCount === 0 ? false : true} />
                        </div>
                        <div className="ch15">
                            <p>{item.price * this.state.itemCount} $</p>
                        </div>
                        <div className="ch10">
                            <img className="Pointer" onClick={() => this.props.deleteProduct(item.id)} src={deleteIcon} alt="delete button"></img>
                        </div>
                    </div>
                    {item.gift ? <Gift giftProps={item.gift} /> : null}
                </div>
            )
        })
        return renderedDivs;
    }

    render() {
        const lshopList = this.shopping();
        return (
            <div>
                <div className="listHeader">
                    <span>Product</span>
                    <span></span>
                    <span></span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>
                <div>
                    {lshopList}
                </div>
            </div>
        )
    }
}

export default ShoppingCart