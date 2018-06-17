import React, { Component } from 'react';

import ShopCard from './ShopCard';
import FilterMarket from './FilterMarket';
import { connect } from 'react-redux';
import { selectDetail, getMarketCards } from '../redux/Actions.js';
import BallerTokenArtifact from "../backend/BallerToken.json";
import TokenMarketArtifact from '../backend/TokenMarket.json';
import Web3 from 'web3';
import HDWalletProvider from 'truffle-hdwallet-provider';

const provider = new HDWalletProvider(
    "game saddle oyster laundry equal loop lunch allow cactus endless hover unfair",
    "https://ropsten.infura.io/Xtgr5qduGjOuTrmJZlOp"
);

const web3 = new Web3(provider);

let ballerContract = new web3.eth.Contract(
    BallerTokenArtifact.abi,
    "0x9cf62ea6a5c0bdfbeaa5485490ce623680174ed9"
);

let tokenMarketContract = new web3.eth.Contract(
    TokenMarketArtifact.abi,
    "0xCA2aF51d911a8a66dD1Dc290Aa681496073cec68"
);

class MarketPage extends Component {

    state = {
        search: '',
    }

    convertToInt(name) {
        var hex = "";
        for (var i = 0; i < name.length; i++) {
            hex += "" + name.charCodeAt(i).toString(16);
        }
        var integer = parseInt(hex);
        var remainder = integer % 7;
        if (remainder < 2) {
            return 1;
        } else if (remainder < 4) {
            return 2;
        } else if (remainder < 7) {
            return 3;
        } else if (remainder < 9) {
            return 4;
        } else {
            return 5;
        }
    }

    convertToFile(name, species) {
        var files = {
            bear_1: "https://www.dropbox.com/s/j7typ3uzgv6wem5/bear_1.png?raw=1",
            bear_2: "https://www.dropbox.com/s/dxs3pfcnfjhsnpi/bear_2.png?raw=1",
            bear_3: "https://www.dropbox.com/s/h9si2v4u63kgzhl/bear_3.png?raw=1",
            bear_4: "https://www.dropbox.com/s/26k66zjyexen9gw/bear_4.png?raw=1",
            bear_5: "https://www.dropbox.com/s/bqow94kebb6arwd/bear_5.png?raw=1",
            bunny_1: "https://www.dropbox.com/s/f1uisu7fa1o34nt/bunny_1.png?raw=1",
            bunny_2: "https://www.dropbox.com/s/adap9oiisp79ue8/bunny_2.png?raw=1",
            bunny_3: "https://www.dropbox.com/s/3vp9ubtk90i1d8n/bunny_3.png?raw=1",
            bunny_4: "https://www.dropbox.com/s/afdf7dvs5ib58b0/bunny_4.png?raw=1",
            bunny_5: "https://www.dropbox.com/s/5d9zpuahtfs89cp/bunny_5.png?raw=1",
            sloth_1: "https://www.dropbox.com/s/6kn68q6qhsm13ev/sloth_1.png?raw=1",
            sloth_2: "https://www.dropbox.com/s/q6j73cd4s8m7214/sloth_2.png?raw=1",
            sloth_3: "https://www.dropbox.com/s/i7jcvqh9vba33tq/sloth_3.png?raw=1",
            sloth_4: "https://www.dropbox.com/s/6j947kk6ndybsdc/sloth_4.png?raw=1",
            sloth_5: "https://www.dropbox.com/s/0748u7vw3kyrv5r/sloth_5.png?raw=1"
        };
        var colors = this.convertToInt(name);
        var url = species + "_" + colors;
        return files[url];
    }

    //Do axios request here
    async componentDidMount() {
        let ballers = await ballerContract.methods.tokensOf("0xCA2aF51d911a8a66dD1Dc290Aa681496073cec68").call();

        console.log(ballers);

        const chararray = [];

        for (let i = 0; i < ballers.length; i++) {
            let baller = await ballerContract.methods.ballers(i).call();
            console.log(baller);
            const image = this.convertToFile(baller.name, baller.species);
            chararray.push({ ...baller, id: i, imageSrc: image, color: "#F2F2F2" });
        }
        
        this.props.getMarketCards(chararray);
    }

    //Handle filtering characters by position
    sortPosition = event => {
        console.log("You filtered by position "+event.target.value);
    }

    //Handle filtering characters by species
    sortSpecies = event => {
        console.log("You filtered by species "+event.target.value);
    }

    //Handle typing in the search bar
    onSearchChange = event => {
        console.log(event.target.value);
        this.setState({ ...this.state, search: event.target.props });
    }

    onBuyCard = async id => {
        console.log(this.props.wallet);
        await tokenMarketContract.methods.buy(id).send({
            from: "0x7299192CD862c9c5345cC47a2Ef24807436009b0",
            value: 100,
            gas:300000
        });
    }

    onSelect = id => {
        this.props.selectDetail(id);
        this.props.history.push({pathname: '/detail'});
        this.props.history.push({pathname: '/detail'});
    }

    render() {

        const players = this.props.players.map(player => {
            return (<ShopCard 
                key={player.id} 
                player={player}
                onBuyCard={() => this.onBuyCard(player.id)}
                clicked={() => this.onSelect(player.id)} />);
        });

        return (
            <div style={{ margin: "30px" }}>
                <FilterMarket
                    sortSpecies={this.sortSpecies}
                    sortPosition={this.sortPosition}
                    onSearchChange={this.onSearchChange}
                    value={this.state.value}
                />

                <hr />
                <div style={{ display: "flex", flexDirection: "row", flexFlow: "row wrap", justifyContent: "space-around" }}>
                    {players}
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        selectDetail: (id) => dispatch(selectDetail(id)),
        getMarketCards: (characters) => dispatch(getMarketCards(characters)),
    };
};

const mapStateToProps = state => { //IMPLEMENT
    return {
        detail: state.selectedPlayer,
        players: state.marketCards,
        wallet: state.wallet,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketPage);