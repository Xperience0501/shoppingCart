import React, { Component } from 'react';

import OrderSummary from './OrderSummary';
import jsonData from '../src/DummyData/data.json';

import locationIcon from '../src/icon/LOCATION.png';
import checkIcon from '../src/icon/check.png';
import './Delivery.css';

const DELIVERY_PINCODES = jsonData.pincode;

class Delivery extends Component {
    state = {
        inputVal: "",
        freeDelivery: false,
        cod: false,
        minDays: 0,
        maxDays: 0,
        estimatedDelivery: false,
        payable: false
    }
    onChangeText = event => {
        this.setState({inputVal: event.target.value})
    }
    onClickChange = () => {
        let availability = Object.keys(DELIVERY_PINCODES);
        let filteredArray = availability.filter(pin => {
            return this.state.inputVal === pin;
        })
        if (filteredArray.length > 0) {
            this.setState({
                cod: DELIVERY_PINCODES[filteredArray[0]].cashOnDelivery,
                minDays: DELIVERY_PINCODES[filteredArray[0]].estimatedDays.min,
                maxDays: DELIVERY_PINCODES[filteredArray[0]].estimatedDays.max,
                estimatedDelivery: true,
                payable: true
            })
            if(DELIVERY_PINCODES[filteredArray[0]].deliveryPrice === 0) {
                this.setState({
                    freeDelivery: true
                })
            } else {
                this.setState({
                    freeDelivery: false
                })
            }
            
        } else {
            this.setState({
                cod: false,
                estimatedDelivery: false,
                freeDelivery: false,
                payable: false
            })
        }
    }
    render() {
        const lfreeDelivery = this.state.freeDelivery ? (<div className="ch1 Grey">
        <img src={checkIcon} alt="check icon"></img>
        <div>Free delivery</div>
    </div>) : null;
        const lcod = this.state.cod ? (<div className="ch1 Grey">
        <img src={checkIcon} alt="check icon"></img>
        <div>Cash on delivery</div>
    </div>) : null;
        const lestDel = this.state.estimatedDelivery ? (<div className="ch2 Grey">
        <img src={checkIcon} alt="check icon"></img>
        <div>Estimated delivery time is {this.state.minDays} - {this.state.maxDays} days</div>
    </div>) : null;
        return (
            <div className="DeliveryContainer">
                <div className="ch1 alignLeft">
                    <div className="paddingDeliveryDivs">
                        Delivery Availability
                    </div>
                    <div className="paddingDeliveryDivs">
                        <span>
                            <img src={locationIcon} alt="location Icon"></img>
                            <input 
                                className="inputBox" 
                                onChange={this.onChangeText}
                                value={this.state.inputVal}
                                type="text"
                                placeholder="110003"
                                maxLength="6"></input>
                            <span className="blueText" onClick={this.onClickChange}>CHANGE</span>
                        </span>
                    </div>
                    <div className="availability">
                        {lfreeDelivery}
                        {lcod}
                        {lestDel}
                    </div>
                </div>
                <div  className="ch1 alignLeft">
                    <OrderSummary
                        subtotal={this.props.summaryAmt}
                        discount={this.props.discountAmt}
                        total={this.props.totalPrice}
                        payable={this.state.payable} />
                </div>
            </div>
        )
    }
}

export default Delivery