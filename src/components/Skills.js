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
        const ids = [{id:"html"},{id:"css"},{id:"js"},{id:"react"},{id:"mongo"}]
        const newIds = ids.map(id => {
            return <div className="iconSkill" id={id.id}></div>
        })

        if(!this.state.expanded){
        return  <p className="skills" onClick={this.openClose}>Show Skills</p> }
        return (
            <div className="container">
            <div id="skills">
                {newIds}
            </div>
            <p className="skills" style={{marginTop:"30px"}} onClick={this.openClose}>Hide Skills</p>
            </div>
        )
    }
}
