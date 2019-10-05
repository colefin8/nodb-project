import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokeTeam extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.team);
    return (
      <div>
        <h2 className="gameboyText">Your Team!</h2>

        {this.props.team.map((e, i) => {
          console.log(e);
          return (
            <div>
              <Pokemon
                route={this.props.route}
                i={i}
                removeFromTeam={this.props.removeFromTeam}
                e={e}
                // gets passed in to Pokemon, getDetails
                getDetails={this.props.getDetails}
                key={i}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PokeTeam;
