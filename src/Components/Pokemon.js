import React from "react";

function Pokemon(props) {
  let nickname = "";
  return (
    <div key={props.i} className="pokemon">
      <button onClick={() => props.changeName(props.i)}>Change Nickname</button>
      <button onClick={() => props.removeFromTeam(props.i)}>Remove</button>
      <input
        onChange={e => (nickname = e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            props.changeName(nickname);
          }
        }}
      ></input>
      {props.e.pokemon_species.name}
    </div>
  );
}

export default Pokemon;
