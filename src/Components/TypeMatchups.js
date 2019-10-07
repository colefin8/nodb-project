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
  "steel",
  "fairy"
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
  steel: 16,
  fairy: 17
};

const TYPE_CHART = {
  normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
  fire: [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
  water: [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
  electric: [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
  grass: [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
  ice: [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
  fighting: [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
  poison: [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
  ground: [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
  flying: [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
  psychic: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
  bug: [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
  rock: [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
  ghost: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5, 1],
  dragon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
  dark: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5, 0.5],
  steel: [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
  fairy: [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1]
};

function TypeMatchups(props) {
  let { type1, type2 } = props;
  // console.log(props);
  let superEffective = [];
  let notVeryEffective = [];
  let notEffective = [];
  let combined = [];
  let type1chart = [];
  let type2chart = [];

  //attacking move type chart
  // if (type2 !== "") {
  //   for (let i = 0; i < TYPES.length; i++) {
  //     combined.push(TYPE_CHART[type1][i] * TYPE_CHART[type2][i]);
  //   }
  // } else if (type1) {
  //   combined = TYPE_CHART[type1];
  // }

  // combined.forEach((e, i) => {
  //   if (e <= 0.5 && e > 0) {
  //     notVeryEffective.push(TYPES[i]);
  //   } else if (e === 0) {
  //     notEffective.push(TYPES[i]);
  //   } else if (e >= 2) {
  //     superEffective.push(TYPES[i]);
  //   }
  // });

  //defending type chart
  if (type2 != "") {
    for (let key in TYPE_CHART) {
      type1chart.push(TYPE_CHART[key][TYPE_ORDER[type1]]);
      type2chart.push(TYPE_CHART[key][TYPE_ORDER[type2]]);
    }
    for (let i = 0; i < TYPES.length; i++) {
      combined.push(type1chart[i] * type2chart[i]);
    }
  } else if (type1) {
    for (let key in TYPE_CHART) {
      combined.push(TYPE_CHART[key][TYPE_ORDER[type1]]);
    }
  }

  combined.forEach((e, i) => {
    if (e <= 0.5 && e > 0) {
      notVeryEffective.push(TYPES[i]);
    } else if (e === 0) {
      notEffective.push(TYPES[i]);
    } else if (e >= 2) {
      superEffective.push(TYPES[i]);
    }
  });

  if (notVeryEffective.length === 0) {
    notVeryEffective.push("none");
  }

  if (notEffective.length === 0) {
    notEffective.push("none");
  }

  if (superEffective.length === 0) {
    superEffective.push("none");
  }

  return (
    <div>
      <h2 className="types">
        <span className="typeMatchup">{`Weak to:  `}</span>
        {superEffective.join(", ")}
      </h2>
      <h2 className="types">
        <span className="typeMatchup">{`Takes less damage from:  `}</span>
        {notVeryEffective.join(", ")}
      </h2>
      <h2 className="types">
        <span className="typeMatchup">{`Takes no damage from:  `}</span>
        {notEffective.join(", ")}
      </h2>
    </div>
  );
}

export default TypeMatchups;
