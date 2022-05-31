import './MyHeader.css'
import clarity from '../../../img/clarity_note-line.svg'
import view from '../../../img/view.svg'
import add from '../../../img/add.svg'
import up from '../../../img/up.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../../Env'
const MyHeader = () => {
    const navigate = useNavigate()
    const [increment, setIncrement] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        (async () => {
            let response = await axios.get(`${url}/api/blog/get/all`)
            let result = await response.data
            let response1 = await axios.get(`${url}/api/stat`)
            let result2 = await response1.data
            let arr = result
            let total = arr.reduce((a, b) => parseInt(a) + parseInt(b.view), 0)
            setIncrement(result2[result2.length - 1].views);
            setTotal(total)
        })()
    })
    return (
        <div className='myMain'>
            <div className="myWelcome">
                <h6>Welcome User</h6>
                <p>Start your today blog experience with this quick links</p>
            </div>
            <div style={{ display: 'flex', width: '407px', marginLeft: '-2rem' }}>
                <ul>
                    <li onClick={() => navigate('/post')}><img src={clarity} alt='clarity' />Write a new post</li>
                    <li onClick={() => navigate('/')}><img style={{ marginRight: '13px' }} src={view} alt='view' />View website</li>
                </ul>
                <ul>
                    <li onClick={() => navigate('/page')}><img src={add} alt="add" />Add new page</li>
                    <li onClick={() => navigate('/category')}><img src={add} alt="add" />Add new category</li>
                </ul>
            </div>
            <div className='myTotals'>
                <div className='myViews'>
                    <h5>{total}</h5>
                    <p>Total Views <span><img src={up} alt="up" />+{increment}</span></p>
                </div>
                <div className='myViews'>
                    <h5>2,223,215</h5>
                    <p>Total Comments <span><img src={up} alt="up" />+4</span></p>
                </div>
            </div>
        </div>
    )
}

export default MyHeader