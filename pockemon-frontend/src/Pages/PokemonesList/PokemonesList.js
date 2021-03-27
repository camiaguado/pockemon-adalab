import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../PokemonesList/PokemonesList.css';
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import PokemonFilter from '../../Components/PokemonFilter/PokemonFilter';
const PokemonesList = ({pokemones}) => {

    if(pokemones.length === 0) return null;

    const obtenerPokemonDetail = async() => {
        const pokemonesDetails = await fetch('https://pokeapi.co/api/v2/pokemon/steelix');
        const pokemon = await pokemonesDetails.json();
        return {
            pokemon
        }
    }
    const vari = obtenerPokemonDetail;
    console.log('a verrrr', vari)
    return (
        <Fragment>
            <div className="pokemon-list">
                <div className="pokemon-list__wrapper">
                    <PokemonFilter></PokemonFilter>

                    <div className="card-list">
                        {pokemones.map(pokemon => 
                            <Link to={`/pokemonDetail/${pokemon.name}`} key={pokemon._id} className="card-link">
                                <PokemonCard ></PokemonCard>
                            </Link>
                            )}
                    </div>
                </div>
            </div>
        </Fragment>

    );
    
}
 
export default PokemonesList;