import React, { Component } from "react";
import "../styles/services.css";

class Services extends Component {
  render() {
    return (
      <div className="services" id="Services">
        <h3>Services</h3>
        <h2>What we offer</h2>
        <div className="row">
          <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description} />
          <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description} myLink={iconObj[1].link}/>
          <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description} />
          <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description} myLink={iconObj[3].link} />
        </div>
      </div>
    );
  }
}

const iconObj = [
  {
    icon: <span><i class="fas fa-phone"></i></span>,
    title: "Phone",
    description: "Call Me"
  },
  {
    icon: <span><i class="fab fa-linkedin"></i></span>,
    title: "LinkdIn",
    description: "My Profile",
    link: "https://www.linkedin.com/in/valentino-suma/"
  },
  {
    icon: <span><i class="fas fa-globe-europe"></i></span>,
    title: "Contact",
    description: "Send an e-mail"
  },
  {
    icon: <span><i class="fab fa-github"></i></span>,
    title: "GitHub",
    description: "My Projects",
    link: "https://github.com/vale75020"
  }
];

class Icons extends Component {
  render() {
    return (
      <div>
          <a href={this.props.myLink}>
        <span>
          {this.props.myIcon}
        </span>
        </a>
        <h4>{this.props.myTitle}</h4>
        <p>{this.props.myDescription}</p>
      </div>
    );
  }
}

export default Services;
