import React, { Component } from "react";
import "../styles/services.css";

const iconObj = [
  {
    icon: <span><i className="fas fa-phone"></i></span>,
    title: "Phone",
    description: "Call Me"
  },
  {
    icon: <span><i className="fab fa-linkedin"></i></span>,
    title: "LinkdIn",
    description: "My Profile",
    link: "https://www.linkedin.com/in/valentino-suma/"
  },
  {
    icon: <span><i className="fas fa-globe-europe"></i></span>,
    title: "Contact",
    description: "Send an e-mail"
  },
  {
    icon: <span><i className="fab fa-github"></i></span>,
    title: "GitHub",
    description: "My Projects",
    link: "https://github.com/vale75020"
  }
];

class Services extends Component {
  state = {
    small:true
  }
  render() {
    const iconList = iconObj.map(icon => {
      return (
              <div className="icon">
                  <a href={icon.link}>
                <span>
                  {icon.icon}
                </span>
                </a>
                <h4>{icon.title}</h4>
                <p>{icon.description}</p>
              </div>
            );})

    return (
      <div className="container">
      <div className="services" id="Services">
        <h3>Services</h3>
        <h2>What we offer</h2>
        <div className="row">
          {iconList}
        </div>
      </div>
  </div>
    );
  }
}

export default Services;
