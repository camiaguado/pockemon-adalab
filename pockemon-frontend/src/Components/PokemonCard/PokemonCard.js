import React, {Fragment} from 'react';
import '../PokemonCard/PokemonCard.css';


const PokemonCard = (props) => {
    console.log('class nameee',props.className);
    const hasEvolution = props.pokemon.past_types.length > 0;
    
    return ( 
        <Fragment>
        <div className={props.className}>
            <div className="cover">
                <div className="cover__img">
                    <img alt={props.pokemon.name} src={props.pokemon.sprites.other.dream_world.front_default} />
                </div>
                 <div className="pokemon-id">ID / {props.pokemon.id}</div>
            </div>
            <div className="card__content">
                <div className="card__title">{props.pokemon.name}
                </div>
                <div className="card__tags">
                    {props.pokemon.types.map(element =>
                            <div>    
                             <div className="card__tags__tag" key={element.type.name+element.type.slot}>{element.type.name}</div>
                             </div>
                    )}
                </div>
                {hasEvolution ? <div className="card__evolution"><span>Evoluciona de:</span> {props.pokemon.past_types[0].types[0].type.name} </div> : ''}     
            </div>
        </div>
    </Fragment> );
}
 
export default PokemonCard;