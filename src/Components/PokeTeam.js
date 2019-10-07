import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";

class PokeTeam extends Component {
  render() {
    if (this.props.route === "Details") {
      return (
        <div className="team">
          <h2 className="gameboyText">
            <p>Your Team</p>
            <button className="button">
              <Link to="/" className="gameboyText">
                Back
              </Link>
            </button>
          </h2>
          {this.props.team.map((e, i) => {
            return (
              <div key={i}>
                <Pokemon
                  getTeam={this.props.getTeam}
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
    // console.log(this.props.team);
    return (
      <div className="team">
        <h2 className="gameboyText">Your Team</h2>
        {this.props.team.map((e, i) => {
          return (
            <div key={i}>
              <Pokemon
                getTeam={this.props.getTeam}
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
