import React from "react";

const TYPES = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel"
];
const TYPE_ORDER = {
  normal: 0,
  fire: 1,
  water: 2,
  electric: 3,
  grass: 4,
  ice: 5,
  fighting: 6,
  poison: 7,
  ground: 8,
  flying: 9,
  psychic: 10,
  bug: 11,
  rock: 12,
  ghost: 13,
  dragon: 14,
  dark: 15,
  steel: 16
};

const TYPE_CHART = {
  normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5],
  fire: [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2],
  water: [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1],
  electric: [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1],
  grass: [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5],
  ice: [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5],
  fighting: [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2],
  poison: [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0],
  ground: [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2],
  flying: [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5],
  psychic: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5],
  bug: [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5],
  rock: [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5],
  ghost: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
  dragon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5],
  dark: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
  steel: [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5]
};

function TypeMatchups(props) {
  let { type1, type2 } = props;
  console.log(props);
  let superEffective = [];
  let notVeryEffective = [];
  let notEffective = [];
  let combined = [];
  if (type2) {
    for (let i = 0; i < TYPES.length; i++) {
      combined.push(TYPE_CHART[type1][i] * TYPE_CHART[type2][i]);
    }
  } else if (type1) {
    combined = TYPE_CHART[type1];
  }

  combined.forEach((e, i) => {
    if (e === 0.5) {
      notVeryEffective.push(TYPES[i]);
    } else if (e === 0) {
      notEffective.push(TYPES[i]);
    } else if (e === 2) {
      superEffective.push(TYPES[i]);
    }
  });

  return (
    <div>
      <h2>Weak to: {superEffective}</h2>
      <h2>Takes less damage from: {notVeryEffective}</h2>
      <h2>Takes no damage from {notEffective}</h2>
    </div>
  );
}

export default TypeMatchups;
