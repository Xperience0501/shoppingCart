import React from 'react';

import './OrderSummary.css';

const OrderSummary = props => {
    return (
        <div className="Summary">
            <div>Order Summary (xx items)</div>
            <div className="SummaryPadding">
                <div className="SummaryLabels Grey">
                    <div>Subtotal</div>
                    <div>{props.subtotal} $</div>
                </div>
                <div className="SummaryLabels">
                    <div className="Grey">Total Discount</div>
                    <div>{props.discount ? props.discount : 0} $</div>
                </div>
                <div className="SummaryLabels Grey">
                    <div>Standard Shipping</div>
                    <div>Free</div>
                </div>
            </div>
            <div className="Checkout">
                <h1>{props.total ? props.total : 0} $</h1>
                <div className="BtnDiv">
                    <button className={props.payable ? "CheckoutBtn Pointer" : "CheckoutBtn NotAllowed"}>CHECKOUT</button>
                </div>
                <div className="blueText">CONTINUE SHOPPING</div>
            </div>
        </div>
    )
}

export default OrderSummary