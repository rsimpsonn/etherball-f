import React from 'react';

import Backdrop from '../components/Backdrop.js';
import dummyimage from "../assets/sloth_1.png";
import Aux from '../hoc/aaux';


const ProfileCard = props => {

    let info = null;
    let image = (
        <div>
            <h5 style={{ paddingTop: "90px" }}> Add Player </h5>
        </div>
    );

    let color = "#CCCCCC";
    if (props.player && props.player.id) {
        image = (
            <img src={props.player.imageSrc}
                alt="Player"
                style={{ height: "160px", width: "160px", margin: "30px" }}
                onClick={props.onClick}
            />
        );

        color = props.player.color;
        info = (
            <Aux>
                <h5> {props.player.name} </h5>
                <span style={{ color: "#BBBBBB", fontSize: "16px"}}>
                    <strong>{props.player.ppg}</strong> PPG&ensp;&#9702;&ensp;
                    <strong>{props.player.apg}</strong> APG&ensp;&#9702;&ensp;
                    <strong>{props.player.rpg}</strong> RPG
                </span>
            </Aux>
        );
    }

    return (
        <div style={{ textAlign: "center" }} 
            onDragOver={props.onDragOver}
            onDrop={props.onDrop}
        >
            <Backdrop width="220px" height="220px" color={color}>
                {image}
            </Backdrop>
            {info}
        </div>
    );
};

export default ProfileCard;