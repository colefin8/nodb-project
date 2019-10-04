import React, { Component } from "react";
import Types from "./Types";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      nickname: "",
      typeMatchups: [],
      type1: "",
      type2: ""
    };
  }

  render = () => {
    if (this.props.e.details.types) {
      this.setState({ type1: this.props.e.details.types[0].type.name });
      if (this.props.e.details.types[1]) {
        this.setState({ type2: this.props.e.details.types[1].type.name });
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
        <button
          onClick={() => {
            console.log(this.props.e);
            // this.props.e is an object
            this.props.getDetails(
              this.props.e.name.pokemon_species.name,
              this.props.i
            );
          }}
        >
          Get Details
        </button>
        {this.props.e.name.pokemon_species.name}
        Nickname: {this.state.nickname}
        <Types type1={this.state.type1} type2={this.state.type2} />
      </div>
    );
  };
}

export default Pokemon;
