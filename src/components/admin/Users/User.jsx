import NavBar from "../Laptop/NavBar"
import SideBar from "../Laptop/SideBar"
import Header from "./Header"
import { useEffect, useState } from "react"
import MyNavBar from "../Phone/NavBar"
import Search from "./Search"
import Table from "./Table"
import '../Main.css'
import axios from 'axios';
import { url } from './../../../Env';

const User = () => {
    const [large, setLarge] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [user, setUser] = useState([])
    useEffect(() => {
        if (size >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
        getUser()
    }, [size])


    const getUser = async () => {
        let res = await axios.get(`${url}/api/user/get/all`)
        let rep = await res.data
        setUser(rep)
    }

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
                <SideBar active={`user`} />
                <div style={{ marginRight: '7rem' }}>
                    <NavBar />
                    <Header large={large} />
                    <Table large={large} users={user} />
                </div>
            </div> :
            <div style={{ marginRight: "1rem", marginLeft: '1rem' }} >
                <MyNavBar active={`user`} hide={hide} name={`Users`} />
                <div id='main'>
                    <Search />
                    <Header large={large} />
                    <Table large={large} users={user} />
                </div>
            </div>
    )
}

export default User