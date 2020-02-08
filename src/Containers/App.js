import React, { Component } from "react";
import Cards from "../Components/Card/Cards";
import Cockpit from "../Components/Cockpit/Cockpit"
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
          <Cards employeesData={this.state.employeeArr }
          textHandle = {this.textHandle} />
        </div>
      );
    }

    let toggleBtn = "";

    cartToggle === null
      ? (toggleBtn = "toggleBtnOff")
      : (toggleBtn = "toggleBtnOn");

    return (
      <div className="App">
       <Cockpit clickHandel= {this.handelChange} btn= {toggleBtn} />
        {cartToggle}
      </div>
    );
  }
}

export default Radium(App);
