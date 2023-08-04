import React, { Component } from "react";
import './header.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return <header className="header">
            <nav className="navbar"></nav>
        </header>
    }       
}

export default Header