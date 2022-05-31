import dude from '../../img/Saly-16.svg'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import medium from '../../img/medium.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../Env'

const LaptopMid = () => {
    const [trending, setTrending] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            let response = await axios.get(`${url}/api/blog/get/trending`)
            let result = await response.data
            setTrending(result)
            console.log(result);
        })()
    }, [])
    const getPostById = (id) => {
        navigate('/more', { state: { postId: id } })
    }
    return (
        <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <div className='main'>
                <h1 className='trend'>Trending Post</h1>
                <h3 className='topic'>{trending.title}</h3>
                <p className='trendText'>{trending.content}.</p>
                <p onClick={() => getPostById(trending.id)} className='more'>Read More</p>
                <div className='social'>
                    <button className='socialButton1'><img style={{ paddingRight: '0.6rem' }} src={twitter} alt='twitter' /> TWITTER</button>
                    <button className='socialButton2'><img style={{ paddingRight: '0.6rem' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                    <button className='socialButton3'><img style={{ paddingRight: '0.6rem' }} src={medium} alt='medium' /> MEDIUM</button>
                </div>
                <div className='dudeMain'>
                    <div className='dudeSect'></div>
                    <img className='dude' src={dude} alt="center" />
                </div>
            </div>
        </div>
    )
}

export default LaptopMid