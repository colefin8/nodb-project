import React from "react";
import SearchBar from "./Components/SearchBar";
import PokeTeam from "./Components/PokeTeam";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <SearchBar
        filtered={props.filtered}
        // handleInput={this.handleInput}
        filterPokemon={props.filterPokemon}
        addToTeam={props.addToTeam}
      />
      <PokeTeam
        getDetails={props.getDetails}
        team={props.team}
        changeName={props.changeName}
        removeFromTeam={props.removeFromTeam}
      />
      <button>
        <Link to="/details">Team Details</Link>
      </button>
    </div>
  );
}

export default Home;
