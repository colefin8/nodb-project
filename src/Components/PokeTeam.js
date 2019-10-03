import React, { Component } from "react";
import Pokemon from "./Pokemon";
import Types from "./Types";

class PokeTeam extends Component {
  constructor() {
    super();

    this.state = { teams: {} };
  }

  render() {
    // console.log(this.props.team);
    return (
      <div>
        <h2>Your Team!</h2>

        {this.props.team.map((e, i) => {
          console.log(e);
          let type1 = "";
          let type2 = "";
          if (e.details.types) {
            type1 = e.details.types[0].type.name;
            if (e.details.types[1]) {
              type2 = e.details.types[1].type.name;
            }
          }
          return (
            <div>
              <Pokemon
                i={i}
                changeName={this.props.changeName}
                removeFromTeam={this.props.removeFromTeam}
                e={e}
                // gets passed in to Pokemon, getDetails
                getDetails={this.props.getDetails}
                key={i}
              />
              <Types type1={type1} type2={type2} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PokeTeam;
