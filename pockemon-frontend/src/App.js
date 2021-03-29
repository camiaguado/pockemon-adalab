import React, { useEffect, useState, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import clienteAxios from './Config/axios';
import '../src/global.css';
import axios from 'axios';

// componentes:
import PokemonesList from './Pages/PokemonesList/PokemonesList'
import PokemonDetail from './Pages/PokemonDetail/PokemonDetail';

function App() {

  const [ pokemones, guardarPokemones ] = useState([]);
  const [ pokemonDetails, guardarDetails ] = useState([]);

  useEffect(() => {
    
    const consultarAPI = () => {
      clienteAxios.get('/pokemones')
        .then( respuesta => {
          guardarPokemones(respuesta.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
    consultarAPI();

    pokemones.forEach(pok => {
      axios.get(pok.url)
      .then(respuesta => {
    
        pokemonDetails.push(respuesta.data);
    
      })   
  })
  guardarDetails(pokemonDetails)
  
  }, [pokemonDetails]);
  
  
  return (
    <Fragment>
      <div className="pokemon__bg">
        <div className="pokemon__bg-top">
            <span className="pokemon__bg-top__left"></span>
            <span className="pokemon__bg-top__right"></span>
        </div>
        <div className="pokemon__bg-bottom">
            <span className="pokemon__bg-bottom__left"></span>
            <span className="pokemon__bg-bottom__right"></span>
        </div>
    </div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <PokemonesList pokemones={pokemonDetails}/>}/>
          <Route exact path="/pokemonDetail/:id" 
                  render={(props) => {
                    const pokemon = pokemonDetails.filter( pokemon => pokemon.name === props.match.params.id)
                  return(
                    <PokemonDetail pokemon={pokemon}></PokemonDetail>
                  )
                  }}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
