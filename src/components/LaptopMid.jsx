import dude from '../img/Saly-16.svg'
import '../App.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import medium from '../img/medium.svg'
import linkedin from '../img/linkedin.svg'
import twitter from '../img/twitter.svg'

const LaptopMid = () => {
    return (
        <div>
            <div className='main'>
                <Container>
                    <h1 className='trend'>Trending Post</h1>
                    <h3 className='topic'>Trending post topic</h3>
                    <p className='trendText'>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
                    <Link to={`/more`}>
                        <p className='more'>Read More</p>
                    </Link>
                    <div className='social'>
                        <button className='socialButton1'><img style={{ paddingRight: '0.6rem' }} src={twitter} alt='twitter' /> TWITTER</button>
                        <button className='socialButton2'><img style={{ paddingRight: '0.6rem' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                        <button className='socialButton3'><img style={{ paddingRight: '0.6rem' }} src={medium} alt='medium' /> MEDIUM</button>
                    </div>
                </Container>
                <div className='dudeMain'>
                    <div className='dudeSect'></div>
                    <img className='dude' src={dude} alt="center" />
                </div>
            </div>
        </div>
    )
}

export default LaptopMid