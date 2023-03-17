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
                        <span className="footer-option"><Link to="/" relative="path">Home</Link></span><span className="footer-option"><Link to="/projects">Projects</Link></span>
                    </div>
                    <div className="footer-row">
                        <span className="footer-option"><Link to="/contact">Contact</Link></span><span className="footer-option"><a href="">CV</a></span>
                    </div>
                </nav>
            </div>
        </div>
    </footer>
    }       
}

export default Footer