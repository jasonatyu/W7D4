import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POKEMON:
            if (action.pokemon.items === undefined) {
                return state;
            }
            return action.pokemon.items;
        default:
            return state;
    }
}

export default itemsReducer;