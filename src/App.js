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
//value below is a pokemon object, it was working before CRUD
  addToTeam = value => {
    if (this.state.team.length < 6) {
      axios.post (`/api/pokemon/team/`, {name: value, details: {}})
      .then(res => {
        this.setState({team: res.data})})  
      .catch(err => console.log(err))  
    } else {
      window.alert("You've already got 6 Pokemon in your team!");
    }
  };

  getTeam = () => {
    axios.get(`/api/pokemon/team/`)
    .then((res) => {
      if(res.data[0] === null){} else {
        this.setState({team: res.data})
      }

    })
  }

  removeFromTeam = value => {
    axios.delete(`api/pokemon/team/${value}`)
    .then(res => {
      console.log(`response: ${res}`)
      this.setState({team: res.data})})
    .catch(err => console.log(`error: ${err}`))
  };

  genChange = value => {
    this.setState({ gen: value });
    axios.get(`/api/pokemon/gen/${value}`).then(res => {
      console.log(`response: ${res}`);
      this.setState({ pokemon: res.data, team: [] });
      console.log(this.state.pokemon);
    }).catch(err => console.log(err));
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
    axios.get(`/api/pokemon/gen/${this.state.gen}`).then(res => {
      this.setState({ pokemon: res.data });
      // console.log(this.state.pokemon);
    });
    this.getTeam()
  }

  render() {
    return (
      <HashRouter>
        <header>
          <GenSelect genChange={this.genChange} />
          <div className="number">
            {this.state.pokemon.length} Pokemon in selected game
          </div>
          <div className="titleIcon"></div>
        </header>
        <Routes
        getTeam={this.getTeam}
          filtered={this.state.filtered}
          filterPokemon={this.filterPokemon}
          addToTeam={this.addToTeam}
          getDetails={this.getDetails}
          team={this.state.team}
          removeFromTeam={this.removeFromTeam}
        />
      </HashRouter>
    );
  }
}

export default App;
