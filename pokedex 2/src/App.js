import React from "react"
import Pokedex from "./Pokedex"
import Pokemon from "./Pokemon"
import { Route, Switch } from "react-router-dom";
import mockData from "./mockData";

// Etapes 1 &  2
function App() {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <Pokedex {...props} />} />
      <Route
        exact path="/:pokemonId"
        render={(props) => <Pokemon {...props} />}
      />
    </Switch>
  );
}

export default App;
