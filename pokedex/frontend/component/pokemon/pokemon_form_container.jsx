import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = dispatch => ({
    createPokemon: (pokemon) => dispatch(createPokemon(pokemon)) // dispatch requestAllPokemon action.
});

export default connect(null, mapDispatchToProps)(PokemonForm)