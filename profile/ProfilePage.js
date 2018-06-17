import React, { Component } from 'react';
import axios from 'axios';

import '../themes.css';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import { getOwnedPlayers, updateLineup, getLineup } from '../redux/Actions';
import { connect } from 'react-redux';


class ProfilePage extends Component {

    state = {
        tokenIds: null,
    }

    componentWillUnmount() {

    }

    //Get array of tokens to get other stuff later
    componentDidMount() {
        axios
              .post("https://3b2f5cd1.ngrok.io/getlineup", {
                    json: true,
                    method: "post",
                    body: { playerAddress: "ryan" },
                    headers: {
                          "content-type": "application/json"
                    }
              })
              .then(data => {
                    console.log(data);
                    this.setState({
                          tokenIds: data
                    });
              });
    }

    onDragOver = event => {
        event.preventDefault();
    }

    onDragStart = (event, player) => {
        console.log("drag start " + player);
        event.dataTransfer.setData("id", player.id);
    }

    onDrop = (event, category) => {
        const id = event.dataTransfer.getData("id");

        let selectedPlayer = "FFA";
        for (let player of this.props.playercards) {
            if (id === player.id){
                selectedPlayer = {...player};
                break;
            }
        }

        console.log(selectedPlayer);
        this.props.updateLineup(selectedPlayer, category);
    }

    render() {

        console.log(this.props);

        const players = this.props.playercards.map(player => {
            return (
                <div 
                    style={{ margin: "15px" }}
                    key={player.id}
                    draggable
                    className="draggable"
                    onDragStart={(event) => this.onDragStart(event, player)}
                >
                    <ProfileCard player={player} />
                </div>
            );
        });

        const lineupcomponent = (
                <div style={{ margin: "20px 10px 20px 10px" }}>
                    <div style={styles.labels}>
                        <span> PG </span>
                        <span> SG </span>
                        <span> SF </span>
                        <span> PF </span>
                        <span> C </span>
                    </div>

                    <div 
                        style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}
                    >
                        <ProfileCard 
                            player={this.props.lineups.pg} 
                            onDragOver={(event) => this.onDragOver(event)}
                            onDrop={(event) => this.onDrop(event, "pg")}
                        /> 
                        <ProfileCard
                            player={this.props.lineups.sg}
                            onDragOver={(event) => this.onDragOver(event)}
                            onDrop={(event) => this.onDrop(event, "sg")}
                        /> 
                        <ProfileCard
                            player={this.props.lineups.sf}
                            onDragOver={(event) => this.onDragOver(event)}
                            onDrop={(event) => this.onDrop(event, "sf")}
                        /> 
                        <ProfileCard
                            player={this.props.lineups.pf}
                            onDragOver={(event) => this.onDragOver(event)}
                            onDrop={(event) => this.onDrop(event, "pf")}
                        /> 
                        <ProfileCard
                            player={this.props.lineups.c}
                            onDragOver={(event) => this.onDragOver(event)}
                            onDrop={(event) => this.onDrop(event, "c")}
                        /> 
                    </div>
                </div>
            );
        

        return (
            <div>
                <ProfileHeader />
                <hr style={{ margin: "20px 40px 0px 40px" }} />

                {lineupcomponent}

                <h4 className="text-muted" style={{ fontWeight: "normal", margin: "30px 40px 0px 40px" }}> Lineups </h4>
                <hr style={{ margin: "20px 40px 0px 40px" }} />
                <div style={{ display: "flex", flexDirection: "row", flexFlow: "row wrap", justifyContent: "space-around" }}>
                    {players}
                </div>
            </div>
        );
    }

}

const styles = {
    labels: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "10px",
        color: "#CCCCCC"
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPlayers: () => dispatch(getOwnedPlayers(this.state.tokenIds)),
        updateLineup: (inPlayer, position) => dispatch(updateLineup(inPlayer, position)),
        fetchLineup: () => dispatch(getLineup(this.state.tokenIds)),
    };
};

const mapStateToProps = state => {
    return {
        playercards: state.playercards,
        lineups: state.lineups,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);