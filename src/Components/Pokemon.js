import React, { Component } from "react";
import Types from "./Types";
import TypeMatchups from "./TypeMatchups";
import axios from "axios";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      nickname: ""
    };
  }

  componentDidMount(){
    this.props.getTeam()
  }

  changeNickname = (value) =>{
    axios.put(`/api/pokemon/team/${this.props.i}`, {value}).then(res =>{
      this.setState({nickname: res.data[this.props.i].nickname})
      console.log(this.state.nickname)
    })
  }

  render = () => {
    let type1 = "";
    let type2 = "";
    let sprite = "";
    if(this.props.e !== null){
    if (this.props.e.details.types) {
      sprite = this.props.e.details.sprites.front_default;
      type1 = this.props.e.details.types[0].type.name;
      if (this.props.e.details.types[1]) {
        type2 = this.props.e.details.types[1].type.name;
      }
    }
    if (this.props.route === "Details") {
      return (
        <div key={this.props.i} className="pokemon gameboyText">
          <img src={sprite} alt={"Pokemon sprite"}/>
          <input className="input"
            onKeyDown={e => {
              if (e.key === "Enter") {
                this.setState({ nickname: e.target.value });
                this.changeNickname(e.target.value)
              }
            }}
          ></input>
          {this.props.e.name.pokemon_species.name}
          Nickname: {this.state.nickname}
          <Types className="gameboyText" type1={type1} type2={type2} />
          <TypeMatchups className="gameboyText" type1={type1} type2={type2} />
        </div>
      );
    } else {
      return (
        <div className="pokemonDisplay">
          {this.props.e.name.pokemon_species.name}
          <br/><button
            className="buttonsmall gameboyText"
            onClick={() => this.props.removeFromTeam(this.props.i)}
          >
            Remove
          </button>
        </div>

      );
    }
  } else return null
} 
}

export default Pokemon;
