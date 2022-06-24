import medium from '../../img/medium.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../Env'

const PhoneMid = () => {
    const [trending, setTrending] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            let response = await axios.get(`${url}/api/blog/get/trending`)
            let result = await response.data
            setTrending(result)
        })()
    }, [])
    const getPostById = (id) => {
        navigate('/more', { state: { postId: id } })
    }
    return (
        <div style={{ marginTop: '2.5rem' }}>

            <h1 className='trend1'>Trending Post</h1>
            <h3 className='topic1'>{trending.title}</h3>
            <p onClick={() => getPostById(trending.id)} className='more1'>Read More</p>
            <div className='social1'>
                <button className='socialButton11'><img style={{ height: '18.52px', width: '16.62px' }} src={twitter} alt='twitter' /> TWITTER</button>
                <button className='socialButton22'><img style={{ height: '24.52px', width: '12.8px' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                <button className='socialButton33'><img style={{ height: '20.52px', width: '12.62px' }} src={medium} alt='medium' /> MEDIUM</button>
            </div>
        </div>
    )
}

export default PhoneMid