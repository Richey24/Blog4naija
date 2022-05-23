import { Link } from "react-router-dom"
import telegram from '../img/telegram.svg'
import youtube from '../img/youtube.svg'
import facebook from '../img/facebook-one.svg'
import insta from '../img/instagram.svg'
import tiktok from '../img/tiktok.svg'
import twitter from '../img/twitter-brand.svg'

const Footer = ({ size }) => {
    return (
        <div>

            <footer className="foot">
                <div className={size === "large" ? "mainFoot" : "mainFoot1"}>
                    <div style={{ marginRight: '0.6rem' }}>
                        <p className="footHead">Quick Link</p>
                        <Link style={{ textDecoration: "none" }} to={`blog`}>
                            <p className="footLink">Blog Posts</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`about`}>
                            <p className="footLink">About</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`contact`}>
                            <p className="footLink">Contact</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`policy`}>
                            <p className="footLink">Privacy Policy</p>
                        </Link>
                    </div>
                    <div>
                        <p className="footHead">Key Features</p>
                        <Link style={{ textDecoration: "none" }} to={`love`}>
                            <p className="footLink">Love Calculator</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`movie`}>
                            <p className="footLink">Movies</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`bank`}>
                            <p className="footLink">Banking</p>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`rate`}>
                            <p className="footLink">Forex Rates</p>
                        </Link>
                    </div>
                </div>

                <div style={size === 'small' ? { marginTop: '3rem' } : null} className="flexDiv">
                    <p className="follow">Follow Us On</p>
                    <div className={size === "large" ? "brandDiv" : "brandDiv1"}>
                        <img className={size === "large" ? "brand" : "brand1"} src={telegram} alt="telegram" />
                        <img className={size === "large" ? "brand" : "brand1"} src={twitter} alt="twitter" />
                        <img className={size === "large" ? "brand" : "brand1"} src={youtube} alt="youtube" />
                        <img className={size === "large" ? "brand" : "brand1"} src={facebook} alt="facebook" />
                        <img className={size === "large" ? "brand" : "brand1"} src={insta} alt="instagram" />
                        <img className={size === "large" ? "brand" : "brand1"} src={tiktok} alt="tiktok" />
                    </div>
                </div>
            </footer>
            <p className="copy">Copyright (c) 2022. Blog4Naija.com</p>
        </div>
    )
}

export default Footer