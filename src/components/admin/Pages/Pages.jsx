import NavBar from "../Laptop/NavBar"
import SideBar from "../Laptop/SideBar"
import Header from "./Header"
import Table from "./Table"
import { useEffect, useState } from "react"
import MyNavBar from "../Phone/NavBar"
import Search from "./Search"
const Pages = () => {

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
                <SideBar active={`page`} />
                <div style={{ marginRight: '7rem' }}>
                    <NavBar />
                    <Header />
                    <Table />
                </div>
            </div> :
            <div style={{ marginRight: "1rem", marginLeft: '1rem' }} >
                <MyNavBar active={`page`} hide={hide} name={`Posts`} />
                <div id='main'>
                    <Search />
                    <Table hide='hide' />
                </div>
            </div>
    )
}

export default Pages