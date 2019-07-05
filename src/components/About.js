import React, { Component } from "react";
import "../styles/about.css";

export default class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="about" id="About">
          <h2>About me</h2>
          <h3>
            Fort d’une expérience professionnelle de 12 ans à Paris, j’ai
            souhaité m’orienter dans le domaine informatique. A ce titre, j’ai
            suivi des formations significatives en développement front end et
            fullstack me permettant d’acquérir des compétences en javascript,
            nodejs, mongodb, react.
            <br />
            Au cours de mes expériences professionnelles, j’ai pu développer mes
            compétences techniques par la modification de site Web d’entreprise
            sous React et la création Layout en MVC, VSTS, Bootstrap, JQuery.
            Mon expérience s’est enrichie récemment en développement par la
            maintenance évolutive, corrective des sites d’entreprises
            (gatsby.js) et l’intégration de nouvelles fonctionnalités me
            conférant une parfaite adaptation technique et professionnelle
            auprès de différentes entités réparties à l’échelle nationale.
          </h3>
          <h3>
            Aujourd’hui, je souhaite mettre à profit mes compétences en
            développement Full Stack JavaScript obtenus durant mes deux années
            d’expériences.
          </h3>
        </div>
      </div>
    );
  }
}
