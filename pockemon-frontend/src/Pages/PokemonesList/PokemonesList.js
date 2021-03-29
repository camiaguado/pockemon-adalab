import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import '../PokemonesList/PokemonesList.css';
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import PokemonFilter from '../../Components/PokemonFilter/PokemonFilter';


const PokemonesList = ({pokemones}) => {
    const [filterPokemon, setFilters] = useState(pokemones);

    const handleSearch =  (term) => {
        console.log(pokemones)
        setFilters(pokemones.filter(pokemon => pokemon.name.includes(term)));
        
    }

    return (
        <Fragment>
            <div className="pokemon-list">
                <div className="pokemon-list__wrapper">
                    <PokemonFilter handleSearch={handleSearch}></PokemonFilter>


                    <div className="card-list">
                    {filterPokemon.map(pokemon =>  
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