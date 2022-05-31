import filter from '../../../img/filter.svg'
import user from '../../../img/user-pink.svg'
import view from '../../../img/view.svg'
import './MyPopular.css'
import './MyGraph.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../../Env'
import { Spinner } from 'react-bootstrap'
const MyPopular = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        (async () => {
            let response = await axios.get(`${url}/api/blog/get/popular`)
            let result = await response.data
            setPost(result)
        })()
    }, [post])
    return (
        <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            <div className='stat'>
                <h5>Popular Posts</h5>
                <p><img src={filter} alt="date" />View</p>
            </div>
            {
                post.length < 1 ? (
                    <Spinner animation='border' style={{ color: "#D05270" }} />
                ) : (
                    post.map((single, i) => (
                        <div key={i} className='myPopular'>
                            <img src={user} alt="user" />
                            <div className='myPostHook'>
                                <h5>{single.title}</h5>
                                <p>{single.createdDate}</p>
                            </div>
                            <div className='myPostViews'>
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

export default MyPopular