import React, { useEffect, useState, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import clienteAxios from './Config/axios'
// estilos:
import '../src/global.css';

// componentes:
import PokemonesList from './Pages/PokemonesList/PokemonesList'
import PokemonDetail from './Pages/PokemonDetail/PokemonDetail';

function App() {

  // state de la app:
  const [ pokemones, guardarPokemones ] = useState([]);

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
  }, []);

  
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
          <Route exact path="/" component={() => <PokemonesList pokemones={pokemones}/>}/>
          <Route exact path="/pokemonDetail/:id" 
                  render={(props) => {
                    const pokemon = pokemones.filter( pokemon => pokemon.name === props.match.params.id)
                    console.log('este es', pokemon[0].url);
                  return(
                    <PokemonDetail pokemon={pokemon[0].url}></PokemonDetail>
                  )
                  }}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
