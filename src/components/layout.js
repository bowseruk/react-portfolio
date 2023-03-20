import Header from './header.js'
import Footer from './footer.js'
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