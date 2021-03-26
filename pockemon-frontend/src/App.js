import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// componentes:
import PokemonesList from './Components/PokemonesList'
import PokemonDetail from './Components/PokemonDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PokemonesList}/>
      </Switch>
      <Switch>
        <Route exact path="/pokemonDetail" component={PokemonDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
