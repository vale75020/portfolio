import React, { Component } from 'react'
import '../styles/navigation.css'

export default class Navigation extends Component {
    render() {
        const sections = [ 'Home', 'About', 'Services', 'Portfolio', 'Contact'];
        const navLinks = sections.map(section => {
            return (
                <li><a href={'#' + section}>{section}</a></li>
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
