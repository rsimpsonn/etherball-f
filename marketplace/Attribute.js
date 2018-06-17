import React from 'react';
import "../themes.css";

const Attribute = props => (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <h6> {props.val}</h6>
        <div style={{ fontSize: "10px" }}> {props.children} </div>
    </div>
);

export default Attribute;