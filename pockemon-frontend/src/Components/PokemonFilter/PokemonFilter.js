import React, {Fragment, useState} from 'react';
import '../PokemonFilter/PokemonFilter.css';
//SEARCH_TERM_LENGHT = 3;

const PokemonFilter = (props) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = event => {
        if(props.handleSearch){
            props.handleSearch(event.target.value);
        }
        setSearchTerm(event.target.value)
    }

    return ( 
        <Fragment>
            <div className="pokemon__header">
                <input onChange={handleSearch} className="filter-search" type="text" placeholder="Filtra pokemones por nombre..." value={searchTerm}></input>
            </div>
        </Fragment> );
}
 
export default PokemonFilter;