import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout";
import './contact.css'

function Contact(props) {
    const navigate = useNavigate()
    return (
        <Layout>
            <div className="retrodex">
                <div className="retrodex-screen">
                    <h2>Contact</h2>
                    <p>Please use the form if you have an enquiry.</p>
                    <form>
                        <div><label htmlFor="name">Name: </label><input id="name" name="name" /></div>
                        <div><label htmlFor="email">Email: </label><input id="email" name="email" type="email" /></div>
                        <div><label htmlFor="enquiry">Enquiry: </label><textarea id="enquiry"  name="enquiry"/></div>
                        <div><button type="button" onClick={() => navigate("/")}>Submit</button></div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact