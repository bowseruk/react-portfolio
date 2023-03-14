import React, { Component } from "react";
import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    render() {
        return <footer className="footer">
        <div className="footer-border">
            <div className="footer-inner-border">
                <nav className="navbar dialogue">
                    <span>{this.state.message}</span>
                </nav>
            </div>
        </div>
    </footer>
    }       
}

export default Footer