import React from 'react';

import dummyimage from "../assets/sloth_1.png";
import '../themes.css';
import Attribute from './Attribute';
import Backdrop from '../components/Backdrop';
import BuyButton from '../components/BuyButton';

//Prop should be one character object
const ShopCard = props => {
    return (
        <div 
            style={{ color: "#cccccc", backgroundColor: "#FFFFFF", margin: "20px 0px 20px 0px" }} 
            onClick={props.clicked}
        >
            <Backdrop style={styles.imageDiv} width="300px" color={props.player.color} >
                <img src={props.player.imageSrc} 
                    alt="Player" 
                    style={{ height: "200px", width: "200px", margin: "50px", zIndex: 300 }} 
                />
                <BuyButton style={styles.button} onBuyCard={props.onBuyCard} price={props.player.price} />
            </Backdrop>

            <h5 style={{ paddingLeft: "10px" }}> 
                <span style={{ color: "#000000" }}>{props.player.name} </span>
                &ensp;.&ensp;{props.player.species}&ensp;.&ensp;{numberToPosition(props.player.position)} 
            </h5>
            
            <h6 style={{ display: "flex", flexDirection: "row", marginLeft: "10px"}}>
                {props.player.games} Games&ensp;.&ensp;
                <Attribute val={props.player.height}>HEIGHT</Attribute>&ensp;.&ensp;
                <Attribute val={props.player.speed}>SPEED</Attribute>&ensp;.&nbsp;
                <Attribute val={props.player.strength}>STRENGTH</Attribute>&nbsp;.&ensp;
                <Attribute val={props.player.shot}>SHOT</Attribute>
            </h6>
        </div>
    );
};

function numberToPosition(number) {
    console.log(number);
    if (number == 1) return "PG";
    if (number == 2) return "SG";
    if (number == 3) return "SF";
    if (number == 4) return "PF";
    if (number == 5) return "C";
}

const styles = {
    imageDiv: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
    },
    button: {
        zIndex: "100",
        width: "200px",
        marginBottom: "5px",
        fontWeight: "bold",
        position: "relative",
        textAlign: "center",
    }
};

export default ShopCard;