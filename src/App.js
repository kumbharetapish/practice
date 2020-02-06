import React, { Component } from "react";
import Cart from "./Components/Cart";
import Radium from "radium"
import "./App.css";
// import { render } from "react-dom";

class App extends Component {
  state = {
    employeeArr: [
      {
        id: "asdfd",
        name: "Ramu",
        imgSrc:
          "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",
        position: "Cook"
      },
      {
        id: "aesrdgf",
        name: "Namu",
        imgSrc:
          "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png",
        position: "surveyor"
      },
      {
        id: "cvbn",
        name: "Kamu",
        position: "Helper",
        imgSrc: "https://ya-webdesign.com/images/avatar-png-1.png"
      }
    ],
    NextState: false
  };

  handelChange = () => {
    let show = this.state.NextState;
    this.setState({
      NextState: !show
    });
  };

  textHandle = (e, id) => {
    const employeeIndex = this.state.employeeArr.findIndex(p => {
      return p.id === id;
    });

    const employee = { ...this.state.employeeArr[employeeIndex] };
    employee.name = e.target.value;

    const newEmployeeArr = [...this.state.employeeArr];
    newEmployeeArr[employeeIndex] = employee;

    this.setState({
      employeeArr: newEmployeeArr
    });
  };

  render() {
    let cartToggle = null;
    if (this.state.NextState) {
      cartToggle = (
        <div className="Wrapper">
          {this.state.employeeArr.map((data, i) => {
            return (
              <Cart
                key={i}
                name={data.name}
                imgSrc={data.imgSrc}
                position={data.position}
                change={e => {
                  this.textHandle(e, data.id);
                }}
              />
            );
          })}
        </div>
      );
    }

    let taggleBtn = "";

    cartToggle === null
      ? (taggleBtn = "toggleBtnOff")
      : (taggleBtn = "toggleBtnOn");

    return (
      <div className="App">
        <button type="submit" onClick={this.handelChange} className={taggleBtn}>
          click Me...!
        </button>
        {cartToggle}
      </div>
    );
  }
}

export default Radium(App);
