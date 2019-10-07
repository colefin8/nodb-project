import React from "react";
import PokeTeam from "./Components/PokeTeam";

function Details(props) {
  props.team.forEach((e, i) => {
    if (e.details.types) {
      return;
    } else {
      props.getDetails(e.name.pokemon_species.name, i);
    }
  });

  return (
    <main className="App">
      <PokeTeam
        getTeam={props.getTeam}
        route={props.route}
        team={props.team}
        removeFromTeam={props.removeFromTeam}
      />
    </main>
  );
}

export default Details;
