import React, { Component } from "react";

import Cards from "./Cards/Card";
class Cart extends Component {
  render() {
    console.log("Cards.js===", this.props);

    return this.props.employeesData.map((data, i) => {
      return (
        <Cards
          key={i}
          name={data.name}
          imgSrc={data.imgSrc}
          position={data.position}
          change={e => {
            this.props.textHandle(e, data.id);
          }}
        />
      );
    });
  }
}

export default Cart;
