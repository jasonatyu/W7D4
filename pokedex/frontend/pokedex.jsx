import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, receivePokemon, requestSinglePokemon, createPokemon } from "./actions/pokemon_actions";

import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './component/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener("DOMContentLoaded", () => {
    // console.log("test")
    const root = document.getElementById("root");
    // window.fetchAllPokemon = APIUtil.fetchAllPokemon;
    // window.requestAllPokemon = requestAllPokemon;
    window.requestSinglePokemon = requestSinglePokemon;
    window.fetchPokemon = APIUtil.fetchPokemon;
    window.createPokemon = APIUtil.createPokemon;
    window.receivePokemon = receivePokemon;
    window.createPokemon = createPokemon;
    const store = configureStore();
    // window.store = store;
     window.getState = store.getState; 
     window.dispatch = store.dispatch;
    // window.selectAllPokemon = selectAllPokemon;

    ReactDOM.render(<Root store={store}/>, root);
});