import React from 'react';
import ItemDetailContainer from './Item_detail_container';
import { Route, Link } from 'react-router-dom';

class PokemonDetail extends React.Component {

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId ) {
            this.props.requestSinglePokemon(this.props.match.params.pokemonId);
        }
    }    

    render() {
       const { pokemon, items } = this.props;
       if (pokemon === undefined) return <h1>LOADING!</h1>
        return (
            <>
                <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
                <div>
                    <h1>{pokemon.name}</h1>
                    <h3>Type: {pokemon.poke_type}</h3>
                    <h3>Attack: {pokemon.attack}</h3>
                    <h3>Defense: {pokemon.defense}</h3>
                    <h2>Items</h2>
                    {Object.values(items).map(item => <Link to={`/pokemon/${pokemon.id}/item/${item.id}`}><img className="item" src={item.image_url} /></Link>) }
                </div>
            </>
        );
    }
}

export default PokemonDetail;