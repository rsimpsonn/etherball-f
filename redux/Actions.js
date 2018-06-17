import * as types from "./types.js";
import axios from 'axios';

export const storeOwnedPlayers = cards => {
    return {
        type: types.GET_OWNED_PLAYERS,
        payload: cards,
    };
};

export const getOwnedPlayers = tokens => {
    return function (dispatch, getState) {
        let cards = "imaginary axios request";
        dispatch(storeOwnedPlayers(cards));
    };
};

export const storeLineup = lineup => {
    return {
        type: types.GET_OWNED_PLAYERS,
        payload: lineup,
    };
};

export const getLineup = tokens => {
    return function (dispatch, getState) {
        let lineup = "imaginary axios request";
        dispatch(storeLineup(lineup));
    };
};

export const updateLineup = (inPlayer, position) => {
    return {
        type: types.ADD_LINEUP,
        payload: {
            in: inPlayer,
            pos: position,
        }
    };
};

export const selectDetail = id => {
    return {
        type: types.SELECT_DETAIL,
        payload: id,
    };
};

export const getMarketCards = cards => {
    return {
        type: types.GET_MARKET_CARDS,
        payload: cards
    };
};

export const getAuth = wallet => {
    console.log("Action creater");
    console.log(wallet);
    return {
        type: types.GET_AUTH,
        payload: wallet,
    };
};