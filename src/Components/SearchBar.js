import React from "react";
// import axios from "axios";

function SearchBar(props) {
  return (
    <div>
      <input
        onChange={e => {
          // props.handleInput(e.target.value);
          props.filterPokemon(e.target.value);
        }}
      />
      <ul className="searchList">
        {props.filtered.map((e, i) => {
          return (
            <li
              key={i}
              className="searchItem"
              onClick={() => {
                props.addToTeam(e);
                // console.log("clicked");
              }}
            >
              {e.pokemon_species.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
