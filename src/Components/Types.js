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
  }
  console.log(type1, type2);
  return <h1>{type1}</h1>;
}

export default Types;
