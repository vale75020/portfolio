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
    icon: <span><i className="fab fa-medium-m"></i></span>,
    title: "Medium",
    description: "My Histories",
    link: "https://medium.com/@valentinosuma"
  },
  {
    icon: <span><i className="fab fa-twitter"></i></span>,
    title: "Twitter",
    description: "My Account",
    link: "https://twitter.com/valentino_suma"
  },
  {
    icon: <span><i className="fab fa-github"></i></span>,
    title: "GitHub",
    description: "My Projects",
    link: "https://github.com/vale75020"
  }
];

class Services extends Component {
  
  render() {
    const iconList = iconObj.map(icon => {
      return (
        <div key={icon.title}>
        <a href={icon.link}>
              <div className="icon" key={icon.title}>
                <span>
                  {icon.icon}
                </span>
                <h4>{icon.title}</h4>
                <p>{icon.description}</p>
              </div>
               </a>
               </div>
            );})

    return (
      <div className="container">
      <div className="services" id="Services">
        <h3>Contact</h3>
        <h2>Join Me</h2>
        <div className="row">
          {iconList}
        </div>
      </div>
  </div>
    );
  }
}

export default Services;
