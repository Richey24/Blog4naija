import NavBar from "../admin/Laptop/NavBar"
import SideBar from "../admin/Laptop/SideBar"
import { useState } from 'react'
import MyNavBar from "../admin/Phone/NavBar"
import Search from "../admin/Posts/Search"
import Edit from "./Edit"
import { useEffect } from 'react';
import '../admin/Main.css'

const Main = () => {
    const [large, setLarge] = useState(false)
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        if (window.innerWidth >= 800) {
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
                <SideBar active={`post`} />
                <div className="colSide">
                    <div style={{ marginLeft: '-5.3rem' }}>
                        <NavBar />
                    </div>
                    <Edit large={large} />
                </div>
            </div> :
            <div style={{ marginRight: "1rem", marginLeft: '1rem' }}>
                <MyNavBar active={`post`} name={`Add a new post`} hide={hide} />
                <div id='main'>
                    <Search />
                    <Edit large={large} />
                </div>
            </div>
    )
}

export default Main