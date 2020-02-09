import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="cartWrapper" onClick={this.props.clickMe}>
        <img
          className="CartPreview"
          src={this.props.imgSrc}
          alt={this.props.name}
        />
        <h3> Mr. {this.props.name}</h3>
        <h4>{this.props.position} </h4>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Card;
