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
          <Link to="/details">
            <button className="button gameboyText">
                Team Details
            </button>
          </Link>
      </section>
    </main>
  );
}

export default Home;
