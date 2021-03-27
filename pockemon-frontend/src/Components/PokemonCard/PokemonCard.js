import React, {Fragment} from 'react';
import '../PokemonCard/PokemonCard.css';
const PokemonCard = () => {
    return ( 
        <Fragment>
        <div className="card">
            <div className="cover">
                <div className="cover__img">
                    <img alt="PokemonName" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/200.png" />
                </div>
                <div className="pokemon-id">ID/X</div>
            </div>
            <div className="card__content">
                <div className="card__title">Hello title
                </div>
                <div className="card__tags">
                    <div className="card__tags__tag">Hello tag</div>
                    <div className="card__tags__tag">Hello tag</div>
                </div>
                <div className="card__evolution">
                    <span>Evoluciona de:</span>
                    helloEvolution
                </div>
            </div>
        </div>
    </Fragment> );
}
 
export default PokemonCard;