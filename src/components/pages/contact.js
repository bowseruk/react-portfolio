import React, { Component } from "react";
import Layout from "../layout";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    render() {
        return <Layout>
            <div>
                <div>
                    <h2>Contact</h2>
                    <form>
                    <input />
                    <input />
                    <textarea />
                    <button >Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    }       
}

export default Contact