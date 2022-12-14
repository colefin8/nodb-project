import React from "react";
// import axios from "axios";

function SearchBar(props) {
  return (
    <section className="searchColumn">
      <h2>{"Search:  click to catch!"}</h2>
      <input
        value={props.userInput}
        className="gameboyText input"
        onChange={e => {
          props.filterPokemon(e.target.value);
        }}
      />
      <ul className="searchList gameboyText">
        {props.filtered.map((e, i) => {
          return (
            <li
              tabIndex={0}
              key={i}
              className="searchItem"
              onClick={() => {
                props.addToTeam(e);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  props.addToTeam(e)
                }
              }}
            >
              {e.pokemon_species.name}
              <div className="icon"></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SearchBar;
