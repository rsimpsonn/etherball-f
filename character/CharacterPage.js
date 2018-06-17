import React, { Component } from 'react';

import '../themes.css';
import Backdrop from '../components/Backdrop';
import dummyimage from "../assets/sloth_2.png";
import { connect } from 'react-redux';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  linearGradient
} from "recharts";

class CharacterPage extends Component {

    goBack() {
        this.props.history.goBack();
    }

    render() {

            const speciesToFunction = {
        sloth: function(x) {
            return (
            31.1534 + (5.231039 - 31.1534) / (1 + Math.pow(x / 15.20487, 10.31144))
            );
        },
        bear: function(x) {
            return (
            38.33333 + (12.5 - 38.33333) / (1 + Math.pow(x / 20.30658, 146.8242))
            );
        },
        bunny: function(x) {
            return 30 - Math.pow(x - 5, 2);
        }
        };

        function slope(f, x, dx) {
        dx = dx || 0.0000001;
        return (f(x + dx) - f(x)) / dx;
        }

        function ageToDerivative(species, age) {
        return slope(speciesToFunction[species], age);
        }

        console.log(this.props.selectedplayer);

        return (
            <div style={{ margin: "20px 0px 20px 0px "}}>
                <button 
                    type="button" 
                    className="btn btn-warning btn-lrg"
                    onClick={this.goBack.bind(this)}
                    style={{ margin: "10px 0px 50px 100px"}}
                >Back</button>
                
                <div style={{ display: "flex", flexDirection: "row", margin: "20px 200px 50px 200px" }}>                
                    <Backdrop style={styles.imageDiv} width="500px" height="500px" color={this.props.selectedplayer.color} >
                        <img src={dummyimage} alt="Player" style={{ height: "300px", width: "auto", margin: "120px" }} />
                    </Backdrop>
                    <div style={{ width: "100%", margin: "0px 20px 20px 20px" }}>
                        <h2>
                            <span style={{ fontSize: "50px" }}> {this.props.selectedplayer.name} </span> 
                            <span style={{ color: "#cccccc", fontSize: "20px", fontWeight: "normal" }}> 
                                &ensp;.&ensp;{this.props.selectedplayer.species}&ensp;.&ensp;{this.props.selectedplayer.position} 
                            </span>
                        </h2>
                        <div style={{ display: "flex", flexDirection: "row"}}>
                            <div style={styles.attribute}>
                                <span style={{ color: "#cccccc" }}> Attributes </span>
                                <h4> {this.props.selectedplayer.strength} strength </h4>
                                <h4> {this.props.selectedplayer.speed} speed </h4>
                                <h4 style={{ color: "#cccccc" }}> {this.props.selectedplayer.shot} shot </h4>
                                <h4 style={{ color: "#dddddd" }}> {this.props.selectedplayer.confidence} confidence </h4>
                            </div>
                            <div style={styles.attribute}>
                                <span style={{ color: "#cccccc" }}> Per Game Statistics </span>
                                <h4> {this.props.selectedplayer.minutes} minutes </h4>
                                <h4> {this.props.selectedplayer.ppg} points </h4>
                                <h4 style={{ color: "#cccccc" }}> {this.props.selectedplayer.apg} assists </h4>
                                <h4 style={{ color: "#dddddd" }}> {this.props.selectedplayer.rpg} rebounds </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const styles = {
    imageDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    attribute: {
        display: "flex",
        flexDirection: "column",
        fontWeight: "bold",
        margin: "20px 30px 0px 30px"
    }
};

const mapStateToProps = state => {
    return {
        selectedplayer: state.selectedPlayer,
    };
};

export default connect(mapStateToProps, null)(CharacterPage);