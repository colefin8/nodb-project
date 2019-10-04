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
    <div>
      <PokeTeam team={props.team} />
    </div>
  );
}

export default Details;
