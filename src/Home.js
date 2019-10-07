import React from "react";
import SearchBar from "./Components/SearchBar";
import PokeTeam from "./Components/PokeTeam";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="App gameboyText">
      <SearchBar
        filtered={props.filtered}
        // handleInput={this.handleInput}
        filterPokemon={props.filterPokemon}
        addToTeam={props.addToTeam}
      />
      <div className="teamColumn">
        <PokeTeam
        getTeam={props.getTeam}
          route={props.route}
          getDetails={props.getDetails}
          team={props.team}
          changeName={props.changeName}
          removeFromTeam={props.removeFromTeam}
        />
        <button className="button gameboyText">
          <Link to="/details" className="gameboyText">
            Team Details
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
