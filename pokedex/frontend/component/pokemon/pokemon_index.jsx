import PokemonIndexContainer from './pokemon_index_container';
import React from 'react';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon(); 
    }

    render() {
       return ( 
            <ul className="pokemon">
                { this.props.pokemon.map((pokemon) => 
                    <li key={pokemon.id}>{pokemon.name}<br/><img src={pokemon.image_url}/><br/></li> 
                    )
                }
            </ul>
        )
    }
}

export default PokemonIndex;