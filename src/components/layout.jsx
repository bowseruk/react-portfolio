import Header from './header.jsx'
import Footer from './footer.jsx'
import './layout.css'

function Layout(props) {
    return (
        <div>
            <div className="footer-spacer">
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;