import React from 'react';

import './Footer.css';

const LoremFooter = props => {
    const dummyDivs = props.dummy.map(link => {
        return (
            <div className="bottomPadding Pointer" key={link.id}>
                <div>{link.text}</div>
            </div>
        )
    })
    return (
        <div className="marginAround">
            <h3>{props.title}</h3>
            {dummyDivs}
        </div>
    );
}

export default LoremFooter