import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import PostBody from './components/post/PostBody'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from './Env'

const Post = () => {
    const [large, setLarge] = useState(false)
    const [spin, setSpin] = useState(false)
    const [post, setPost] = useState({})
    const [related, setRelated] = useState([])
    const [size, setSize] = useState(window.innerWidth)
    let { id } = useParams()
    let navigate = useNavigate()

    const getPost = async () => {
        if (id === undefined) {
            navigate('/')
        } else {
            let response = await axios.get(`${url}/api/blog/get/${id}`)
            let result = await response.data
            setPost(result)
            if (!result.category) return
            let filterResponse = await axios.get(`${url}/api/blog/get/page?offSet=${0}&category=${result.category}&pageSize=5`)
            let filterResult = await filterResponse.data
            let arr = []
            for (let i = 0; i < filterResult.content.length; i++) {
                if (arr.length === 3) break
                if (filterResult.content[i].id === result.id) continue
                arr.push(filterResult.content[i])
            }
            setRelated(arr)
        }
    }

    getPost()



    useEffect(() => {
        if (window.innerWidth >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
        setSpin(true)
        setSpin(false)
        window.scrollTo(0, 0)
    }, [size])

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
                                post.content ? (
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