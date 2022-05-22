import { useEffect, useState } from "react"
import Header from "./components/Header"
import LaptopMid from "./components/homepage/LaptopMid"
import { Spinner } from 'react-bootstrap'
import PhoneMid from "./components/homepage/PhoneMid"
import Main from "./components/homepage/Main"

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


    return (
        <div>
            {
                spin ? (
                    <Spinner animation="grow" variant="info" />
                ) : (
                    <>
                        <Header />
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
                    </>
                )
            }
        </div>
    )
}

export default App