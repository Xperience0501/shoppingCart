import React from 'react';

import LoremFooter from './LoremFooter';
import ContactUs from './ContactUs';
import FooterEnd from './FooterEnd';

import lJsonData1 from '../src/DummyData/data1.json';
import lJsonData2 from '../src/DummyData/data2.json';

import './Footer.css';

const Footer = props => {
    return (
        <div className="footerColor" >
            <div className="container">
                <div className="container1">
                    <LoremFooter title="LOREM" dummy={lJsonData1.data1} />
                    <LoremFooter title="LOREM" dummy={lJsonData2.data2} />
                    <LoremFooter title="LOREM" dummy={lJsonData2.data2} />
                    <LoremFooter title="LOREM" dummy={lJsonData1.data1} />
                </div>
                <div>
                    <ContactUs />
                </div>
            </div>
            <hr></hr>
            <FooterEnd />
        </div>
        
    )
}

export default Footer