import React, { Component } from 'react'
import backHome from '../images/backHome.jpeg'
import '../styles/header.css';


const myStyle = {
    backgroundImage: `url( ${backHome} )`,
    height: "57vh"}

export default class Header extends Component {
    render() {
        return (
            <div id="Home">
                <header style={myStyle}>
                    <h1>{this.props.title}</h1>
                    <p>FullStack Web Developper</p>
                    <a href="#button">{this.props.button}</a>
                </header>
            </div>
        )
    }
}
