import Graph from "./Laptop/Graph"
import Header from "./Laptop/Header"
import NavBar from "./Laptop/NavBar"
import Popular from "./Laptop/Popular"
import SideBar from "./Laptop/SideBar"
import './Main.css'
import { useState, useEffect } from 'react'
import MyNavBar from "./Phone/NavBar"
import MyHeader from "./Phone/MyHeader"
import MyGraph from "./Phone/MyGraph"
import Search from "./Phone/Search"
import MyPopular from "./Phone/MyPopular"

const Dashboard = () => {
    const [large, setLarge] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    useEffect(() => {
        if (size >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
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
        large ?
            <div className="dashMain">
                <SideBar active={`dash`} />
                <div className="colSide">
                    <NavBar />
                    <Header />
                    <Graph />
                    <Popular />
                </div>
            </div> :
            <div style={{ marginRight: "1rem", marginLeft: '1rem' }}>
                <MyNavBar active={`dash`} name={`Dashboard`} hide={hide} />
                <div id='main'>
                    <MyHeader />
                    <MyGraph />
                    <Search />
                    <MyPopular />
                </div>
            </div>
    )
}

export default Dashboard