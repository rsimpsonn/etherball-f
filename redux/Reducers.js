import * as types from './types.js';

const initialState = {

    playercards: [
        {
            id: "Dudley James",
            name: "Dudley James",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "https://www.dropbox.com/s/l8rinbx0aq70hn1/sloth_3.png?raw=1",
            price: 0.01,
            color: "#F4ECDF",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Al Gordon",
            name: "Al Gordon",
            species: "Sloth",
            position: "SG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#DBF0F5",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Al Gordon 2",
            name: "Al Gordon 42",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#F4ECDF",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Al Gordon 3",
            name: "Al Gordon 3",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#DBF0F5",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Al Gordon 4",
            name: "Al Gordon 4",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#F4ECDF",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Dudley James 2",
            name: "Dudley James 2",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#F4ECDF",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Al Gordon 11",
            name: "Al Gordon 11",
            species: "Sloth",
            position: "SG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#DBF0F5",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Al Gordon 12",
            name: "Al Gordon 42",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#F4ECDF",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Al Gordon 13",
            name: "Al Gordon 13",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#DBF0F5",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
        {
            id: "Al Gordon 14",
            name: "Al Gordon 14",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#F4ECDF",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
    ],

    marketCards: [
        {
            id: "Al Gordon 19",
            name: "Al Gordon 19",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
            price: 0.01,
            color: "#F4ECDF",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
    ],

    lineups: {
        pg: null,
        sg: null,
        sf: null,
        pf: null,
        c: null,
    },
    
    wallet: false,

    selectedPlayer: { //Hardcoded value to hopefully make this work
            id: "Al Gordon 19",
            name: "Al Gordon ",
            species: "Sloth",
            position: "PG",
            games: 8,
            height: "3'6",
            speed: 64,
            strength: 46,
            shot: 71,
            imageSrc: "https://www.dropbox.com/s/adap9oiisp79ue8/bunny_2.png?raw=1",
            price: 0.01,
            color: "#F4ECDF",
            ppg: 84,
            apg: 7.5,
            rpg: 2.8,
            confidence: 32,
            minutes: 43,
        },
};

const reducer = (state = initialState, action) => {
    console.log("You are in the reducer");
    console.log(action.payload);
    switch (action.type){
        case (types.ADD_LINEUP): {

            console.log(state.lineups);
            console.log(action.payload.pos);

            const newlineups = {
                pg: {...state.lineups.pg},
                sg: { ...state.lineups.sg },
                sf: { ...state.lineups.sf },
                pf: { ...state.lineups.pf },
                c: { ...state.lineups.c },
            };
            
            newlineups[action.payload.pos] = action.payload.in;
            console.log(newlineups);
            return {
                ...state,
                lineups: newlineups,
            };
        }
        case (types.SELECT_DETAIL): {
            let showPlayer = "WHATEVER";
            for (let player of state.playercards) {
                if (action.payload === player.id) {
                    showPlayer = { ...player };
                    break;
                }
            }

            if (showPlayer === "WHATEVER") {
                for (let player of state.marketCards) {
                    if (action.payload === player.id) {
                        showPlayer = { ...player };
                        break;
                    }
                }
            }

            return {
                ...state, selectedPlayer: showPlayer 
            };
        }
        case (types.GET_MARKET_CARDS): {
            return { ...state, marketCards: action.payload };
        }
        case (types.GET_OWNED_PLAYERS): {
            return state; // return { ...state, playercards: action.payload }
        }
        case (types.FETCH_LINEUP): {
            return state; // return { ...state, lineups: action.payload }
        }
        case (types.GET_AUTH): {
            return { ...state, wallet: action.payload };
        }
        default: return state;

    }
};

export default reducer;