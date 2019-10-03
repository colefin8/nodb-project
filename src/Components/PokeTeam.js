import React from "react";
import Pokemon from "./Pokemon";
// import axios from "axios";

function PokeTeam(props) {
  // console.log(props.team);
  return (
    <div>
      <h2>Your Team!</h2>
      {props.team.map((e, i) => {
        return (
          <Pokemon
            updateName={props.updateName}
            i={i}
            changeName={props.changeName}
            removeFromTeam={props.removeFromTeam}
            e={e}
          />
        );
      })}
    </div>
  );
}

export default PokeTeam;
