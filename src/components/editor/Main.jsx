import NavBar from "../admin/Laptop/NavBar"
import SideBar from "../admin/Laptop/SideBar"
import { useState } from 'react'
import MyNavBar from "../admin/Phone/NavBar"
import MyHeader from "../admin/Phone/MyHeader"
import Edit from "./Edit"

const Main = () => {
    const [large, setLarge] = useState(false)
    window.addEventListener("load", () => {
        if (window.innerWidth >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
    })


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
                <div style={{ marginRight: '1rem' }} className="colSide">
                    <div style={{ marginLeft: '-5.3rem' }}>
                        <NavBar />
                    </div>
                    <Edit />
                </div>
            </div> :
            <div style={{ marginRight: "1rem", marginLeft: '1rem' }}>
                <MyNavBar active={`post`} name={`Post`} hide={hide} />
                <div id='main'>
                    <MyHeader />

                </div>
            </div>
    )
}

export default Main