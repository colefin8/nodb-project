import React from "react";
import SearchBar from "./Components/SearchBar";
import PokeTeam from "./Components/PokeTeam";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <main className="App gameboyText">
      <SearchBar
        userInput={props.userInput}
        filtered={props.filtered}
        // handleInput={this.handleInput}
        filterPokemon={props.filterPokemon}
        addToTeam={props.addToTeam}
      />
      <section className="teamColumn">
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
      </section>
    </main>
  );
}

export default Home;
