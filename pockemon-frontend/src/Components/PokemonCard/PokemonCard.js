import React, {Fragment} from 'react';
import '../PokemonCard/PokemonCard.css';


const PokemonCard = ({pokemon}) => {

    const hasEvolution = pokemon.past_types.length > 0;

    return ( 
        <Fragment>
        <div className="card">
            <div className="cover">
                <div className="cover__img">
                    <img alt={pokemon.name} src={pokemon.sprites.other.dream_world.front_default} />
                </div>
                 <div className="pokemon-id">ID / {pokemon.base_experience}</div>
            </div>
            <div className="card__content">
                <div className="card__title">{pokemon.name}
                </div>
                <div className="card__tags">
                    {pokemon.types.map(element =>
                             <div className="card__tags__tag" key={element.type.name}>{element.type.name}</div>
                    )}
                </div>
                {hasEvolution ? <div className="card__evolution"><span>Evoluciona de:</span> {pokemon.past_types[0].types[0].type.name} </div> : ''}     
            </div>
        </div>
    </Fragment> );
}
 
export default PokemonCard;