import { useEffect, useState } from "react"
import Header from "./components/Header"
import LaptopMid from "./components/homepage/LaptopMid"
import { Spinner } from 'react-bootstrap'
import PhoneMid from "./components/homepage/PhoneMid"
import Main from "./components/homepage/Main"
import Footer from "./components/Footer"

const App = () => {
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

    const hide = () => {
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
        <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
            {
                spin ? (
                    <Spinner animation="grow" variant="info" />
                ) : (
                    <>
                        <Header hide={hide} />
                        <div id="main">
                            {
                                large ? (
                                    <LaptopMid />
                                ) : (
                                    <PhoneMid />
                                )
                            }
                            {
                                large ? (<Main name='blogPost1' filter='filter' post='post' />) : (
                                    <Main name='blogPost' filter='filter1' post='post1' />
                                )
                            }
                            {
                                large ? (<Footer size='large' />) : (
                                    <Footer size='small' />
                                )
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default App