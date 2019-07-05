import React, { Component } from 'react'
import '../styles/skills.css'

export default class Skills extends Component {
    state = {
        expanded:false
    }

    openClose = () => {
        this.setState({ expanded: !this.state.expanded})
    }

    render() {
        if(!this.state.expanded){
        return  <p className="skills" onClick={this.openClose}>Show Skills</p> }
        return (
            <div className="container">
            <div id="skills">
                <div className="iconSkill" id="html"></div>
                <div className="iconSkill" id="css"></div>
                <div className="iconSkill" id="js"></div>
                <div className="iconSkill" id="react"></div>
                <div className="iconSkill" id="node"></div>
                <div className="iconSkill" id="mongo"></div>
            </div>
            <p className="skills" style={{marginTop:"30px"}} onClick={this.openClose}>Hide Skills</p>
            </div>
        )
    }
}
