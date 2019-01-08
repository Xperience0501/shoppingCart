import React from 'react';
import phonIcon from './icon/phone.png';

import './Footer.css';

const ContactUs = props => {
    return (
        <div className="rightBorder">
            <div>
                <h3>CALL US</h3>
                <div className="alignTimings">
                    <div className="alignTiming">
                        <div>Monday-Friday</div>
                        <div>8am to 9pm CST</div>
                    </div>
                    <div className="alignTiming">
                        <div>Saturday & Sunday</div>
                        <div>10am to 6pm CST</div>
                    </div>
                </div>
                <div className="alignPhone">
                    <img src={phonIcon} alt="phone icon" />
                    <span><strong>1800-123-1234</strong></span>
                </div>
                <hr></hr>
                <span><strong>support.us@test.com</strong></span>
            </div>
        </div>
    )
}

export default ContactUs