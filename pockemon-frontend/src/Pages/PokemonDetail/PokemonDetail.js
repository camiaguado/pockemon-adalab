import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';


const PokemonDetail = ({pokemon}) => {

return ( <Fragment>
    <div className="pokemon-list__wrapper">
        <div className="pokemon__header">
            <Link to="/" className="pokemon-link">Volver</Link>
        </div>
       <PokemonCard pokemon={pokemon[0]}></PokemonCard>
    </div>
</Fragment> );
}
 
export default PokemonDetail