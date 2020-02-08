import React from "react";

import Cards from "./Cards/Card" 
const Cart = props =>
  props.employeesData.map((data, i) => {
    return (
      <Cards
        key={i}
        name={data.name}
        imgSrc={data.imgSrc}
        position={data.position}
        change={e => {
          props.textHandle(e, data.id);
        }}
      />
    );
  });

export default Cart;
