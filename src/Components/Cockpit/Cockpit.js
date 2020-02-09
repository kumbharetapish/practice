import React from "react";
const Cockpit = props => {
  return (
    <div className={"Wrapper"}>
      <button type="submit" onClick={props.clickHandel} className={props.btn}>
        click Me...!
      </button>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Cockpit;
