import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { getAuth } from './redux/Actions.js';

import "./themes.css";
import "./App.css";
import Layout from "./layout/Layout";
import MarketPage from "./marketplace/MarketPage";
import GamePage from "./game/GamePage";
import ProfilePage from "./profile/ProfilePage";
import CharacterPage from "./character/CharacterPage";
import Aux from "./hoc/aaux";

class App extends Component {
    state = {
        wallet: false
    };

    componentWillMount() {
        if (window.web3 && window.web3.currentProvider.isMetaMask) {
              window.web3.eth.getAccounts((error, accounts) => {
                    console.log(accounts);
                    this.setState({ wallet: accounts[0] });
                    this.props.getUserString(this.state.wallet);
              });
        } else {
              console.log("Not finding an account");
        }

    }

    render() {
        return this.state.wallet ? (
            <Aux>
                <Layout>
                    <Switch>
                        <Route path="/profile" render={() => <ProfilePage />} />
                        <Route path="/marketplace" component={MarketPage} />
                        <Route path="/game" component={GamePage} />
                        <Route path="/detail" component={CharacterPage} />
                        <Redirect from="/" to="/profile" />
                    </Switch>
                </Layout>
            </Aux>
        ) : (
            <h1>Oof</h1>
        );
    }
}

const mapStateToProps = state => {
    return {
        wallet: state.wallet
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserString: (wallet) => dispatch(getAuth(wallet)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
