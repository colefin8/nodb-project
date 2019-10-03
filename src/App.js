import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import PokeTeam from "./Components/PokeTeam";
import SearchBar from "./Components/SearchBar";
import GenSelect from "./Components/GenSelect";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      userInput: "",
      gen: 2,
      filtered: [],
      team: []
    };
  }

  //this.state.team[0].pokemon_species.url

  filterPokemon = value => {
    if (value) {
      this.setState({
        filtered: this.state.pokemon.filter((e, i) => {
          let name = e.pokemon_species.name.toLowerCase();
          let search = value.toLowerCase();
          if (name.includes(search)) {
            return true;
          } else {
            return false;
          }
        })
      });
    } else {
      this.setState({ filtered: [] });
    }
  };

  // handleInput = input => {
  //   this.setState({ userInput: input });
  // };

  addToTeam = value => {
    if (this.state.team.length < 6) {
      this.setState({ team: [...this.state.team, value] });
    }
  };

  removeFromTeam = value => {
    let newTeam = this.state.team;
    console.log(newTeam);
    newTeam.splice(value, 1);
    this.setState({ team: newTeam });
  };

  genChange = value => {
    this.setState({ gen: value });
    // console.log(e.target.value);
    axios.get(`/api/pokemon/${value}`).then(res => {
      console.log(res);
      this.setState({ pokemon: res.data, team: [] });
      console.log(this.state.pokemon);
    });
  };

  changeName = (index, name) => {};

  componentDidMount() {
    axios.get(`/api/pokemon/${this.state.gen}`).then(res => {
      this.setState({ pokemon: res.data });
      // console.log(this.state.pokemon);
    });
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={() => console.log(this.state.team)}>team</button> */}
        <GenSelect genChange={this.genChange} />
        <div>{this.state.pokemon.length}</div>
        <SearchBar
          filtered={this.state.filtered}
          // handleInput={this.handleInput}
          filterPokemon={this.filterPokemon}
          addToTeam={this.addToTeam}
        />
        <PokeTeam
          team={this.state.team}
          changeName={this.changeName}
          removeFromTeam={this.removeFromTeam}
        />
      </div>
    );
  }
}

export default App;
