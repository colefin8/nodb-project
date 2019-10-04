import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

function Routes(props) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Home
            filtered={props.filtered}
            filterPokemon={props.filterPokemon}
            addToTeam={props.addToTeam}
            getDetails={props.getDetails}
            team={props.team}
            changeName={props.changeName}
            removeFromTeam={props.removeFromTeam}
          />
        )}
      />
      <Route
        path="/details"
        render={() => (
          <Details team={props.team} getDetails={props.getDetails} />
        )}
      />
    </Switch>
  );
}

export default Routes;