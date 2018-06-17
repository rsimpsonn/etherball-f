import React from 'react';

const Backdrop = (props) => (
    <div style={{
        width: props.width,
        height: props.height,
        borderRadius: "20px",
        backgroundColor: props.color,
    }}>
        {props.children}
    </div>
);

export default Backdrop;