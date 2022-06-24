import NavBar from "../Laptop/NavBar"
import SideBar from "../Laptop/SideBar"
import Header from "./Header"
import Table from "./Table"
import { useEffect, useState } from "react"
import MyNavBar from "../Phone/NavBar"
import Search from "./Search"
import '../Main.css'
const Comment = () => {

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
                <SideBar active={`comment`} />
                <div style={{ marginRight: '7rem' }}>
                    <NavBar />
                    <Header large='large' />
                    <Table large="large" />
                </div>
            </div> :
            <div style={{ marginRight: "1rem", marginLeft: '1rem' }} >
                <MyNavBar active={`comment`} hide={hide} name={`Comments`} />
                <div id='main'>
                    <Search />
                    <Header large='small' />
                    <Table large='small' />
                </div>
            </div>
    )
}

export default Comment