import React, { Component } from 'react'
import '../styles/navigation.css'

export default class Navigation extends Component {
    render() {
        const sections = [ 'Home', 'About','Portfolio', 'Contact'];
        const navLinks = sections.map(section => {
            return (
                <li key={section}><a href={'#' + section}>{section}</a></li>
            )
        });
        return (
            <div className="container">
                <nav>
                    <h2 className="logo">{this.props.logoTitle}</h2>
                <ul>
                    {navLinks}
                </ul>
                </nav>
            </div>
        )
    }
}
