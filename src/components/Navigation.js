import React, { Component } from 'react'
import '../styles/navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h2 className="logo">React Project</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </nav>
            </div>
        )
    }
}
