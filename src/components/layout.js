import Header from './header.js'
import Footer from './footer.js'
import './layout.css'

function Layout(props) {
    return (
        <div>
            <div className="footer-spacer">
                <Header />
                <main>
                    {props.children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;