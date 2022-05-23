import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import PostBody from './components/post/PostBody'

const Post = () => {
    const [large, setLarge] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [spin, setSpin] = useState(true)
    useEffect(() => {
        setSpin(true)
        if (size >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
        setSpin(false)
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
        <div style={large ? { marginLeft: '4rem', marginRight: '4rem' } : { marginLeft: '1rem', marginRight: '1rem' }}>
            {
                spin ? (
                    <Spinner animation="grow" variant="info" />
                ) : (
                    <div>

                        <Header hide={postHide} />

                        <div id='main'>
                            <PostBody large={large} />
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