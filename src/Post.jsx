import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import PostBody from './components/post/PostBody'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from './Env'

const Post = () => {
    const [large, setLarge] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [spin, setSpin] = useState(true)
    const [post, setPost] = useState({})
    const [related, setRelated] = useState([])
    let location = useLocation()
    let navigate = useNavigate()

    const getPost = async (id = location.state.postId) => {
        if (location.state === null) {
            navigate('/')
        } else {
            if (location.state.postId === undefined) {
                navigate('/')
            } else {
                let response = await axios.get(`${url}/api/blog/get/${id}`)
                let result = await response.data
                setPost(result)
                let filterResponse = await axios.get(`${url}/api/blog/get/page?offSet=${0}&category=${result.category}&pageSize=5`)
                let filterResult = await filterResponse.data
                let arr = []
                for (let i = 0; i < filterResult.content.length; i++) {
                    if (arr.length === 3) break
                    if (filterResult.content[i].id === result.id) continue
                    arr.push(filterResult.content[i])
                }
                setRelated(arr)
                let main = document.getElementById("main")
                main.scrollIntoView()
            }
        }
    }

    useEffect(() => {
        setSpin(true)
        if (size >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
        getPost()
        setSpin(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    window.addEventListener('resize', () => { setSize(window.innerWidth) })

    const postHide = () => {
        let main = document.getElementById("main")
        if (main.style.opacity === "0") {
            main.style.transition = 'opacity 0.5s ease-in'
            main.style.height = "auto"
            main.style.opacity = "1"
        } else {
            main.style.transition = 'opacity 0.5s ease-out'
            main.style.opacity = "0"
            main.style.height = "0"
        }
    }
    return (
        <div style={large ? { marginLeft: '6rem', marginRight: '6rem' } : { marginLeft: '1rem', marginRight: '1rem' }}>
            {
                spin ? (
                    <Spinner animation="grow" variant="info" />
                ) : (
                    <div>

                        <Header hide={postHide} />
                        <div id='main'>
                            {
                                post.title ? (
                                    <PostBody getPost={getPost} relatedPost={related} post={post} large={large} />
                                ) : (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Spinner animation="border" style={{ color: "#D05270" }} />
                                    </div>
                                )
                            }
                            {
                                large ? (<Footer size='large' />) : (
                                    <Footer size='small' />
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Post