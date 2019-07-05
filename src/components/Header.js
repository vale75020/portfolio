import React, { Component } from "react";
import backHome from "../images/backHome.jpeg";
import Skills from "./Skills";
import "../styles/header.css";

const myStyle = {
  backgroundImage: `url( ${backHome} )`,
  height: "100%",
  paddingBottom: "100px"
};

export default class Header extends Component {
  render() {
    return (
        <div className="container">
      <div id="Home">
        <header style={myStyle}>
          <h1>{this.props.title}</h1>
          <p>FullStack Web Developper</p>
          <Skills />
        </header>
      </div>
      </div>
    );
  }
}
