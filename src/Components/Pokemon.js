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

  componentDidMount() {
    this.props.getTeam();
  }

  changeNickname = value => {
    axios.put(`/api/pokemon/team/${this.props.i}`, { value }).then(res => {
      this.setState({ nickname: res.data[this.props.i].nickname });
      console.log(this.state.nickname);
    });
  };

  render = () => {
    let type1 = "";
    let type2 = "";
    let sprite1 = "";
    let sprite2 = "";
    const { e, route, i, removeFromTeam } = this.props;
    if (e !== null) {
      if (e.details.types) {
        sprite1 = e.details.sprites.front_default;
        sprite2 = e.details.sprites.front_shiny;
        console.log(e.details.sprites);
        type1 = e.details.types[0].type.name;
        if (e.details.types[1]) {
          type2 = e.details.types[1].type.name;
        }
      }
      if (route === "Details") {
        return (
          <div key={i} className="pokemon gameboyText">
            <div className="topRow">
              <img
                className="sprite"
                src={sprite1}
                alt={"Pokemon sprite normal"}
              />
              <img
                className="sprite"
                src={sprite2}
                alt={"Pokemon sprite shiny"}
              />
              <div className="detailsName">
                <input
                  spellCheck="false"
                  placeholder="nickname"
                  className="input"
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      this.setState({ nickname: e.target.value });
                      this.changeNickname(e.target.value);
                    }
                  }}
                ></input>
                {e.name.pokemon_species.name}
                <br />
                Nickname: {this.state.nickname}
              </div>
            </div>
            <Types className="gameboyText" type1={type1} type2={type2} />
            <TypeMatchups className="gameboyText" type1={type1} type2={type2} />
          </div>
        );
      } else {
        return (
          <div className="pokemonDisplay">
            {e.name.pokemon_species.name}
            <br />
            <button
              className="buttonsmall gameboyText"
              onClick={() => removeFromTeam(i)}
            >
              Remove
            </button>
          </div>
        );
      }
    } else return null;
  };
}

export default Pokemon;
