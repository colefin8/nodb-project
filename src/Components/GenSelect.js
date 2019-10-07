import React from "react";

function GenSelect(props) {
  return (
    <div className="genSelect gameboyText">
      Game:
      <br />
      <select
        className="gameboyText select"
        onChange={e => props.genChange(e.target.value)}
      >
        <option className="gameboyText" value="2">
          Red/Blue/Yellow
        </option>
        <option className="gameboyText" value="3">
          Gold/Silver/Crystal
        </option>
        <option className="gameboyText" value="4">
          Ruby/Sapphire/Emerald
        </option>
        <option className="gameboyText" value="5">
          Diamond/Pearl
        </option>
        <option className="gameboyText" value="6">
          Platinum
        </option>
        <option className="gameboyText" value="7">
          HeartGold/SoulSilver
        </option>
        <option className="gameboyText" value="8">
          Black/White
        </option>
        <option className="gameboyText" value="9">
          Black2/White2
        </option>
      </select>
    </div>
  );
}

export default GenSelect;
