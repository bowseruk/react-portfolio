import React, { Component } from "react";
import './footer.css'
import { Link } from "react-router-dom";

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
                    <div className="footer-row">
                        <span className="footer-option">Home</span><span className="footer-option">Projects</span>
                    </div>
                    <div className="footer-row">
                        <span className="footer-option">Contact</span><span className="footer-option">CV</span>
                    </div>
                </nav>
            </div>
        </div>
    </footer>
    }       
}

export default Footer