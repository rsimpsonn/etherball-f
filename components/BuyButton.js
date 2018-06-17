import React from 'react';

import '../themes.css';
import sign from "../assets/sign_icon.png";

const BuyButton = props => {
    return (
        <button
            type="button"
            className="btn btn-outline-info"
            onClick={props.onBuyCard}
            style={{ marginLeft: "65px" }}
        >
            <img src={sign} alt="Pen" style={{ height: "20px" }} />
            &ensp;Sign now for {props.price}
        </button>
    );
}

export default BuyButton;
