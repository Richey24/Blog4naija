import { useLayoutEffect, useState } from "react"
import Header from "./components/Header"
import LaptopMid from "./components/homepage/LaptopMid"
import { Spinner } from 'react-bootstrap'
import PhoneMid from "./components/homepage/PhoneMid"
import Main from "./components/homepage/Main"
import Footer from "./components/Footer"
import axios from 'axios'
import { url } from "./Env"

const App = () => {
    const [large, setLarge] = useState(false)
    const [spin, setSpin] = useState(true)
    const [size, setSize] = useState(window.innerWidth)

    useLayoutEffect(() => {
        if (window.innerWidth >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
        (async () => {
            setSpin(true)
            await axios.get(`${url}/api/stat/count`)
            setSpin(false)
        })()
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
        <div style={large ? { marginLeft: '6rem', marginRight: '6rem' } : { marginLeft: '1rem', marginRight: '1rem' }}>
            {
                spin ? (
                    <div
                        style={{
                            width: "100%",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Spinner animation="grow" style={{ color: "#D05270" }} />
                    </div>
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