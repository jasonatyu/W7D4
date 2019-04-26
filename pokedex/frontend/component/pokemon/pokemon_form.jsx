import React from 'react';

class PokemonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            attack: 0,
            defense: 0, 
            poke_type: "",
            moves: [],
            image_url: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefense = this.handleDefense.bind(this);
        this.handleMove1 = this.handleMove1.bind(this);
        this.handleMove2 = this.handleMove2.bind(this);
        this.handleImgUrl = this.handleImgUrl.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPokemon(this.state).then(()=> this.setState({
            name: "",
            attack: 0,
            defense: 0,
            poke_type: "",
            moves: [],
            image_url: ""
        }))
    }

    handleName(e) {
        this.setState({name: e.target.value});
    }
    
    handleAttack(e) {
        this.setState({attack: e.target.value});
    }
    
    handleDefense(e) {
        this.setState({defense: e.target.value});
    }
    
    handlePokeType(e) {
        this.setState({poke_type: e.target.value});
    }
    
    handleMove1(e) {
        this.setState({moves: [e.target.value, this.state.moves[1]]});
    }
    
    handleMove2(e) {
        this.setState({ moves: [this.state.moves[0], e.target.value]});
    }
    
    handleImgUrl(e) {
        this.setState({image_url: e.target.value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label> Name:
                    <input type="text" onChange={this.handleName} value={this.state.name}/>
                </label>
                <label> attack:
                    <input type="text" onChange={this.handleAttack} value={this.state.attack}/>
                </label>
                <label> defense:
                    <input type="text" onChange={this.handleDefense} value={this.state.defense}/>
                </label>
                <label> Poke_type:
                    <input type="text" onChange={this.handlePokeType} value={this.state.poke_type}/>
                </label>
                <label> move1:
                    <input type="text" onChange={this.handleMove1} value={this.state.move1}/>
                </label>
                <label> move2:
                    <input type="text" onChange={this.handleMove2} value={this.state.move2}/>
                </label>
                <label> image_url:
                    <input type="text" onChange={this.handleImgUrl} value={this.state.image_url}/>
                </label>
                <button>Create Pokemon</button>               
            </form>

        )
    }
}

export default PokemonForm;