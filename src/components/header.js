import React, { Component } from "react";
import './header.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return <header className="header">
            <div className="header-border">
                <div className="header-inner-border">
                    <nav className="navbar dialogue">
                        Test Text

                    </nav>
                </div>
            </div>
        </header>
    }       
}

export default Header