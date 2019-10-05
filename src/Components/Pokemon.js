import React, { Component } from "react";
import Types from "./Types";
import TypeMatchups from "./TypeMatchups";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      nickname: ""
    };
  }

  render = () => {
    let type1 = "";
    let type2 = "";
    let sprite = "";

    if (this.props.e.details.types) {
      sprite = this.props.e.details.sprites.front_default;
      type1 = this.props.e.details.types[0].type.name;
      if (this.props.e.details.types[1]) {
        type2 = this.props.e.details.types[1].type.name;
      }
    }
    console.log(this.props.e.details);
    if (this.props.route === "Details") {
      return (
        <div key={this.props.i} className="pokemon">
          <img src={sprite} />
          <input
            onKeyDown={e => {
              if (e.key === "Enter") {
                this.setState({ nickname: e.target.value });
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
        <div>
          {this.props.e.name.pokemon_species.name}
          <button
            className="buttonsmall gameboyText"
            onClick={() => this.props.removeFromTeam(this.props.i)}
          >
            Remove
          </button>
          <input
            className="inputsmall"
            onKeyDown={e => {
              if (e.key === "Enter") {
                this.setState({ nickname: e.target.value });
              }
            }}
          ></input>
          Nickname: {this.state.nickname}
        </div>
      );
    }
  };
}

export default Pokemon;
