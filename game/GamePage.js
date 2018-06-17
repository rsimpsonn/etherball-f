import React, { Component } from 'react';

import '../themes.css';
import axios from "axios";
import { connect } from 'react-redux';

import styled from "styled-components";
import AnimatedNumber from "react-animated-number";
import Statbox from "./Statbox";
import Web3 from "web3";
import HDWalletProvider from "truffle-hdwallet-provider";
const BallerTokenArtifact = require("../backend/BallerToken.json");
const TokenMarketArtifact = require("../backend/TokenMarket.json");


const provider = new HDWalletProvider(
    "game saddle oyster laundry equal loop lunch allow cactus endless hover unfair",
    "https://ropsten.infura.io/Xtgr5qduGjOuTrmJZlOp"
);

const web3 = new Web3(provider);

let ballerContract = new web3.eth.Contract(
    BallerTokenArtifact.abi,
    "0x06563acbde06038334ae30e4f6452c953af41396"
);

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            playerAddress1: "",
            playerAddress2: "goiaoighewoigas",
            count: 0,
            team1Points: 0,
            team2Points: 0,
            player1TeamStats: [],
            player2TeamStats: []
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);

        this.team1Points = 0;
        this.team2Points = 0;

        this.gameWords = [
            "the",
            "ball",
            "ball!",
            "tip!",
            "passed",
            "shot",
            "scored",
            "blocked",
            "stole",
            "Assisted",
            "by",
            "to",
            "won",
            "got",
            "rebound",
            "missed",
            "rebound!",
            "shot!",
            "scored!"
        ];
    }

    startTimer() {
        this.timerId = setInterval(() => {
            if (this.state.count <= this.state.messages.length) {
                this.setState({
                    count: this.state.count + 1
                });
            } else {
                this.stopTimer();
            }
        }, 10000);
    }

    stopTimer() {
        clearInterval(this.timerId);
    }

    componentDidMount() {
        axios
            .post("https://3b2f5cd1.ngrok.io/game", {
                json: true,
                method: "post",
                body: { playerAddress1: "ryan", playerAddress2: "jackie" },
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    messages: data.data.messages,
                    player1Team: data.data.player1Team,
                    player2Team: data.data.player2Team,
                    player1TeamStats: data.data.player1TeamStats,
                    player2TeamStats: data.data.player2TeamStats
                });
                this.playerDev();
            });
    }

    totalPointsTeam(number) {
        var total = 0;
        if (number === 1) {
            this.state.player1TeamStats.forEach(player => (total += player.points));
        } else {
            this.state.player2TeamStats.forEach(player => (total += player.points));
        }
        return total;
    }

    formatMessage(message) {
        const array = message.split(" ");
        const objects = array.map(word => {
            if (word === "scored!") {
                const name = message.substring(0, message.indexOf("scored")).trim();
                console.log(name);
                if (this.state.player1Team.findIndex(i => i.name === name) !== -1) {
                } else {
                }
            }
            if (this.gameWords.indexOf(word) === -1) {
                return (
                    <Paragraph style={{ fontFamily: "Avenir-Black" }}>
                        {word + " "}
                    </Paragraph>
                );
            }
            return <Paragraph>{word + " "}</Paragraph>;
        });
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
            >
                {objects}
            </div>
        );
    }

    async playerDev() {
        let ballers = await ballerContract.methods.tokensOf("0xaE5659B0734B291446b07a1B2E56a6324971aB8E").call();
        //const baller = await web3.methods.ballers(0).call();
        console.log(ballers);
        //this.state.player1TeamStats.forEach(player => {
        //    web3.methods.develop();
        //});
    }

    render() {
        this.startTimer();
        return (
            <Section>
                <Subtitle>From the Announcer</Subtitle>
                <div style={{ display: "flex", flexDirection: "row", margin: 0 }}>
                    <Section style={{ width: 200 }}>
                        <Subtitle>You</Subtitle>
                        <AnimatedNumber
                            component="text"
                            value={this.totalPointsTeam(1)}
                            style={{
                                transition: `${Math.random() * 2} ease-in`,
                                fontSize: 40,
                                transitionProperty: "background-color, color, opacity",
                                fontFamily: "Avenir-Medium"
                            }}
                            stepPrecision={0}
                            duration={20000}
                        />
                    </Section>
                    <Container>
                        {this.state.messages
                            .slice(0, this.state.count)
                            .reverse()
                            .map(message =>
                                <Paragraph>{this.formatMessage(message)}</Paragraph>
                            )}
                    </Container>
                    <Section style={{ width: 200 }}>
                        <Subtitle>{this.state.playerAddress2}</Subtitle>
                        <Paragraph style={{ fontSize: 40, marginTop: 5 }}>
                            <AnimatedNumber
                                component="text"
                                value={this.totalPointsTeam(2)}
                                style={{
                                    transition: `${Math.random() * 2} ease-in`,
                                    fontSize: 40,
                                    transitionProperty: "background-color, color, opacity",
                                    fontFamily: "Avenir-Medium"
                                }}
                                stepPrecision={0}
                                duration={20000}
                            />
                        </Paragraph>
                    </Section>
                </div>
                {this.state.player1Team &&
                    this.state.player2Team &&
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: 0,
                            marginTop: 10
                        }}
                    >
                        <Section style={{ marginRight: 10 }}>
                            <Statbox
                                stats={this.state.player1TeamStats[0]}
                                player={this.state.player1Team[0]}
                            />
                            <Statbox
                                stats={this.state.player1TeamStats[1]}
                                player={this.state.player1Team[1]}
                            />
                            <Statbox
                                stats={this.state.player1TeamStats[2]}
                                player={this.state.player1Team[2]}
                            />
                            <Statbox
                                stats={this.state.player1TeamStats[3]}
                                player={this.state.player1Team[3]}
                            />
                            <Statbox
                                stats={this.state.player1TeamStats[4]}
                                player={this.state.player1Team[4]}
                            />
                        </Section>
                        <Section style={{ marginLeft: 10 }}>
                            <Statbox
                                stats={this.state.player2TeamStats[0]}
                                player={this.state.player2Team[0]}
                            />
                            <Statbox
                                stats={this.state.player2TeamStats[1]}
                                player={this.state.player2Team[1]}
                            />
                            <Statbox
                                stats={this.state.player2TeamStats[2]}
                                player={this.state.player2Team[2]}
                            />
                            <Statbox
                                stats={this.state.player2TeamStats[3]}
                                player={this.state.player2Team[3]}
                            />
                            <Statbox
                                stats={this.state.player2TeamStats[4]}
                                player={this.state.player2Team[4]}
                            />
                        </Section>
                    </div>}
            </Section>
        );
    }
}

const Paragraph = styled.p`
  font-family: Avenir-Medium;
  letter-spacing: 1px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  margin-right: 5px;
`;

const Subtitle = styled.p`
  font-family: Avenir-Light;
  color: #DCDCDC;
  letter-spacing: 2px;
  font-size: 14px;
`;

const Container = styled.div`
  height: 300px;
  width: 300px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: #D2D2D2 0px 0px 10px;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  padding-top: 20px;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const mapStateToProps = state => {
    return {
        wallet: state.wallet,
    };
};

export default connect(mapStateToProps, null)(GamePage);