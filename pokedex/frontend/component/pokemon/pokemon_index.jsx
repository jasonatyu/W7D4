import PokemonIndexContainer from './pokemon_index_container';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import React from 'react';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon(); 
    }

    render() {
        const pokemonItems = this.props.pokemon.map((pokemon) => <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>) 
        return ( 
            <>
                <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
                <ul className="pokemon">
                    { pokemonItems }
                </ul>
            </>
        )
    }
}

export default PokemonIndex;