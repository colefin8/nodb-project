import React, { Component } from "react";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      nickname: ""
    };
  }
  render = () => {
    return (
      <div key={this.props.i} className="pokemon">
        <button onClick={() => this.props.changeName(this.props.i)}>
          Change Nickname
        </button>
        <button onClick={() => this.props.removeFromTeam(this.props.i)}>
          Remove
        </button>
        <input
          onChange={e => this.setState({ nickname: e.target.value })}
          onKeyDown={e => {
            if (e.key === "Enter") {
              this.props.changeName(this.state.nickname);
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
      </div>
    );
  };
}

export default Pokemon;
