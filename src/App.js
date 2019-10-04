import React, { Component } from "react";
// import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import axios from "axios";
import Routes from "./Routes";
// import PokeTeam from "./Components/PokeTeam";
// import SearchBar from "./Components/SearchBar";
import GenSelect from "./Components/GenSelect";
import { HashRouter, Link } from "react-router-dom";

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
      this.setState({
        team: [...this.state.team, { name: value, details: {} }]
      });
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

  getDetails = (pokeName, i) => {
    //pokeUrl is correctly being passed in as a string
    axios
      .get(`/api/pokemon/details/${pokeName}`)
      .then(response => {
        let teamCopy = this.state.team;
        teamCopy[i].details = response.data;
        this.setState({ team: teamCopy });
        console.log("got details");
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios.get(`/api/pokemon/${this.state.gen}`).then(res => {
      this.setState({ pokemon: res.data });
      // console.log(this.state.pokemon);
    });
  }

  render() {
    return (
      <HashRouter>
        <header>
          {" "}
          <GenSelect genChange={this.genChange} />
          <div>{this.state.pokemon.length} Pokemon in selected games</div>
        </header>
        <Routes
          filtered={this.state.filtered}
          filterPokemon={this.filterPokemon}
          addToTeam={this.addToTeam}
          getDetails={this.getDetails}
          team={this.state.team}
          changeName={this.changeName}
          removeFromTeam={this.removeFromTeam}
        />
      </HashRouter>
    );
  }
}

export default App;
