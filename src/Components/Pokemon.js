import React, { Component } from "react";
import Types from "./Types";
import TypeMatchups from "./TypeMatchups";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      nickname: "",
      type1: "",
      type2: ""
    };
  }

  render = () => {
    let type1 = "";
    let type2 = "";

    if (this.props.e.details.types) {
      type1 = this.props.e.details.types[0].type.name;
      if (this.props.e.details.types[1]) {
        type2 = this.props.e.details.types[1].type.name;
      }
    }
    return (
      <div key={this.props.i} className="pokemon">
        <button onClick={() => this.props.removeFromTeam(this.props.i)}>
          Remove
        </button>
        <button onClick={() => this.props.changeName(this.props.i)}>
          Change Nickname
        </button>
        <input
          onKeyDown={e => {
            if (e.key === "Enter") {
              this.setState({ nickname: e.target.value });
            }
          }}
        ></input>
        {this.props.e.name.pokemon_species.name}
        Nickname: {this.state.nickname}
        <Types type1={type1} type2={type2} />
        <TypeMatchups type1={type1} type2={type2} />
      </div>
    );
  };
}

export default Pokemon;
