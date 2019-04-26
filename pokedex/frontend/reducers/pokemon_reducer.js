import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POKEMON: 
            return Object.assign({}, state, {
                [action.pokemon.pokemon.id]: action.pokemon.pokemon
            })
            // return action.pokemon.pokemon;
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, action.pokemon, state)
            // return action.pokemon;
        case RECEIVE_NEW_POKEMON: 
             return Object.assign({}, state, {
                 [action.pokemon.id]: action.pokemon
             })
        default:
            return state;
    }
}

export default pokemonReducer;