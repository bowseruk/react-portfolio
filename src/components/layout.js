import Header from './header.js'
import Footer from './footer.js'
import div from './StatsBar.js'
import './layout.css'
import StatsBar from './StatsBar.js'

function Layout(props) {
    return (
        <div>
            <div className="footer-spacer">
                <Header />
                <main className="main grass-theme">
                    <div className="stats-bar-opponent"><StatsBar /></div>
                    <div className="stats-bar-player"><StatsBar /></div>
                    <div className="player">
                        <div className="ground"></div>
                    </div>
                    <div className="opponent">
                        {props.children}
                        <div className="ground"></div>
                    </div>
                    
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;