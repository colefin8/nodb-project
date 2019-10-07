import React from "react";

function Types(props) {
  let hasSecondType = true;
  if (props.type2 === "") {
    hasSecondType = false;
  }
  let type1 = props.type1;
  let type2 = "";
  if (hasSecondType) {
    type2 = props.type2;
    return (
      <p>
        <span className="typeMatchup">{`Types: `}</span>
        {`${type1}, ${type2}`}
      </p>
    );
  } else {
    return (
      <p>
        <span className="typeMatchup">{`Type: `}</span>
        {`${type1}`}
      </p>
    );
  }
}

export default Types;
