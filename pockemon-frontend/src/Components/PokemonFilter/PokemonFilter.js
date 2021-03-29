import React, {Fragment} from 'react';
import '../PokemonFilter/PokemonFilter.css';
const PokemonFilter = () => {
    return ( 
        <Fragment>
            <div className="pokemon__header">
                <input className="filter-search" type="text" placeholder="Filtra pokemones por nombre..."></input>
            </div>
    </Fragment> );
}
 
export default PokemonFilter;