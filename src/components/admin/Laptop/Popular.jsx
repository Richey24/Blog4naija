import React, { useEffect, useState } from 'react'
import './Graph.css'
import filter from '../../../img/filter.svg'
import user from '../../../img/user-pink.svg'
import view from '../../../img/view.svg'
import './Popular.css'
import axios from 'axios'
import { url } from '../../../Env'
import { Spinner } from 'react-bootstrap'
const Popular = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        (async () => {
            let response = await axios.get(`${url}/api/blog/get/popular`)
            let result = await response.data
            setPost(result)
        })()
    }, [post])
    return (
        <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
            <div className='myStat'>
                <h5>Popular Posts</h5>
                <p><img src={filter} alt="date" />View</p>
            </div>
            {
                post.length < 1 ? (
                    <Spinner animation='border' style={{ color: "#D05270" }} />
                ) : (
                    post.map((single, i) => (
                        <div key={i} className='popular'>
                            <img src={user} alt="user" />
                            <div className='postHook'>
                                <h5>{single.title}</h5>
                                <p>{single.createdDate}</p>
                            </div>
                            <div className='categories'>
                                <h6>{single.category}</h6>
                            </div>
                            <div className='postViews'>
                                <img src={view} alt="view" />
                                <span>{single.view}</span>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Popular