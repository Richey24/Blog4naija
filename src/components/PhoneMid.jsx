import { Link } from 'react-router-dom'
import medium from '../img/medium.svg'
import linkedin from '../img/linkedin.svg'
import twitter from '../img/twitter.svg'
import '../App.css'

const PhoneMid = () => {
    return (
        <div>
            <h1 className='trend1'>Trending Post</h1>
            <h3 className='topic1'>Trending post topic</h3>
            <br />
            <p className='trendText1'>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
            <Link to={`/more`}>
                <p className='more1'>Read More</p>
            </Link>
            <div className='social1'>
                <button className='socialButton11'><img style={{ paddingRight: '0.2rem' }} src={twitter} alt='twitter' /> TWITTER</button>
                <button className='socialButton22'><img style={{ paddingRight: '0.2rem' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                <button className='socialButton33'><img style={{ paddingRight: '0.2rem' }} src={medium} alt='medium' /> MEDIUM</button>
            </div>
        </div>
    )
}

export default PhoneMid