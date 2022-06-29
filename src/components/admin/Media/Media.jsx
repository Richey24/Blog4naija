import NavBar from "../Laptop/NavBar"
import SideBar from "../Laptop/SideBar"
import Header from "./Header"
import { useEffect, useState } from "react"
import MyNavBar from "../Phone/NavBar"
import Search from "../Pages/Search"
import '../Main.css'
import Main from "./Main"

const Media = () => {
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
                <SideBar active={`media`} />
                <div style={{ marginLeft: '1rem' }}>
                    <NavBar />
                    <Header />
                    <Main large={large} />
                </div>
            </div> :
            <div style={{ marginRight: "1rem", marginLeft: '1rem' }} >
                <MyNavBar active={`media`} hide={hide} name={`Media`} />
                <div id='main'>
                    <Search />
                    <Main large={large} />
                </div>
            </div>
    )
}

export default Media