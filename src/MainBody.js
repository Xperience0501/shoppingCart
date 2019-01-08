import React, { Component } from 'react';

import jsonData from '../src/DummyData/data.json';

import ShoppingCart from './ShoppingCart';
import Delivery from './Delivery';
import './ShoppingCart.css';

const ALL_PRODS = jsonData.products;

class MainBody extends Component {

    state = {
        itemsInCart: jsonData.products,
        totalSubPrice: 0,
        discount: 0,
        totalPrice: 0      
    }

    currentItemAdded = prodId => {
        let priceToGetAdded = ALL_PRODS.filter(item => {
            return item.id === prodId;
        })
        let newCount = priceToGetAdded[0].price;
        this.setState(prevState => { return {totalSubPrice: prevState.totalSubPrice + newCount}}, this.discountCalc());
    }

    discountCalc = () => {
        let lsubPrice = this.state.totalSubPrice;
        let ldiscount = this.state.totalSubPrice >= 5000 ? lsubPrice*0.1 : 0;
        this.setState({ discount: ldiscount}, this.totalPriceCalc())
    }
    
    totalPriceCalc = () => {
        let lsubPrice = this.state.totalSubPrice;
        let ldiscount = this.state.discount;
        this.setState({totalPrice: lsubPrice - ldiscount});
    }

    currentItemRemoved = prodId => {
        let priceToGetReduced = ALL_PRODS.filter(item => {
            return item.id === prodId;
        })
        let newCount = priceToGetReduced[0].price;
        this.setState(prevState => { return {totalSubPrice: prevState.totalSubPrice - newCount}}, this.discountCalc());
    }

    deleteProd = prodId => {
        const filteredArray = this.state.itemsInCart.filter(item => item.id !== prodId);
        this.setState({
            itemsInCart: filteredArray
        }, this.updateCartPrice())
    }

    updateCartPrice = () => {
        const sum = this.state.itemsInCart.map(item => {
            return item.price;
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState(prevState => { return {totalSubPrice: prevState.totalSubPrice + sum}}, this.discountCalc());
    }

    updateTotalPrice = () => {
        const sum = ALL_PRODS.map(item => {
            return item.price;
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState(prevState => { return {totalSubPrice: prevState.totalSubPrice + sum}}, this.discountCalc());
    }

    render() {
        return (
            <div className="main">
                <div className="Banner">
                    <div>Shop for $5000 or more and get 10% discount on your order</div>
                </div>
                <div className="ShoppingHeader"><h2>Shopping cart</h2></div>
                <div className="mainBody">
                    <ShoppingCart
                        currItemAdded={this.currentItemAdded}
                        currItemRemoved={this.currentItemRemoved}
                        deleteProduct={this.deleteProd}
                        itemsInCart={this.state.itemsInCart}
                        currItemCount={this.state.currentItemCount} />
                    <Delivery
                        summaryAmt={this.state.totalSubPrice}
                        discountAmt={this.state.discount}
                        totalPrice={this.state.totalPrice} />
                </div>
            </div>
        )
    }
}

export default MainBody