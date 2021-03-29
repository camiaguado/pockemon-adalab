import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../PokemonesList/PokemonesList.css';
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import PokemonFilter from '../../Components/PokemonFilter/PokemonFilter';


const PokemonesList = ({pokemones}) => {
    
    return (
        <Fragment>
            <div className="pokemon-list">
                <div className="pokemon-list__wrapper">
                    <PokemonFilter></PokemonFilter>

                    <div className="card-list">
                    {pokemones.map(pokemon =>  
                            <Link to={`/pokemonDetail/${pokemon.name}`} key={pokemon.id} className="card-link">
                                <PokemonCard pokemon={pokemon} key={pokemon.id}></PokemonCard>
                            </Link>
                            
                            )}
                    </div>
                </div>
            </div>
        </Fragment>

    );
    
}
 
export default PokemonesList;