import { useEffect, useState } from "react"
import Header from "./components/Header"
import LaptopMid from "./components/LaptopMid"
import { Spinner } from 'react-bootstrap'
import PhoneMid from "./components/PhoneMid"

const App = () => {
    const [large, setLarge] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [spin, setSpin] = useState(true)
    useEffect(() => {
        setSpin(true)
        if (size >= 1000) {
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
                    </>
                )
            }
        </div>
    )
}

export default App