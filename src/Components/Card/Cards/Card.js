import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="cartWrapper" onClick={props.clickMe}>
      <img className="CartPreview" src={props.imgSrc} alt={props.name} />
      <h3> Mr. {props.name}</h3>
      <h4>{props.position} </h4>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default Card;