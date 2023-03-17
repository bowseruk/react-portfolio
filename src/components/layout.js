import Header from './header.js'
import Footer from './footer.js'
import StatsBar from './StatsBar.js'
import './layout.css'

function Layout(props) {
    return (
        <div>
            <div className="footer-spacer">

                <Header />
                <main className="main grass-theme">
                    <div className="stats-bar-opponent"><StatsBar name="Adam" /></div>
                    <div className="stats-bar-player"><StatsBar name="Bolsover" /></div>
                    <div className="player">
                        <div className="ground"></div>
                    </div>
                    <div className="opponent">
                        <div className="opponent-window">{props.children}</div>
                        <div className="ground"></div>
                    </div>
                    
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;