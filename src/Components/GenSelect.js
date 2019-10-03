import React from "react";

function GenSelect(props) {
  return (
    <div>
      Game:
      <select onChange={e => props.genChange(e.target.value)}>
        <option value="2">Red/Blue/Yellow</option>
        <option value="3">Gold/Silver/Crystal</option>
        <option value="4">Ruby/Sapphire/Emerald</option>
        <option value="5">Diamond/Pearl</option>
        <option value="6">Platinum</option>
        <option value="7">HeartGold/SoulSilver</option>
        <option value="8">Black/White</option>
        <option value="9">Black2/White2</option>
      </select>
    </div>
  );
}

export default GenSelect;
