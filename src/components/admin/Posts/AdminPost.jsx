import NavBar from "../Laptop/NavBar"
import SideBar from "../Laptop/SideBar"
import Header from "./Header"
import Table from "./Table"
import { useEffect, useState } from "react"
import MyNavBar from "../Phone/NavBar"
import Search from "./Search"
import axios from 'axios'
import { url } from '../../../Env'
import '../Main.css'
const AdminPost = () => {

  const [large, setLarge] = useState(false)
  const [size, setSize] = useState(window.innerWidth)
  const [post, setPost] = useState([])
  const [search, setSearch] = useState([])
  useEffect(() => {
    if (window.innerWidth >= 800) {
      setLarge(true)
    } else {
      setLarge(false)
    }
    (async () => {
      let response = await axios.get(`${url}/api/blog/get/all`)
      let result = await response.data
      setPost(result)
      setSearch(result)
    })()
  }, [size])

  const filterPost = (text) => {
    let newPosts = search.filter((filtered) => filtered.title.toLowerCase().includes(text.toLowerCase()))
    setPost(newPosts)
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
        <SideBar active={`post`} />
        <div style={{ marginRight: '7rem' }}>
          <NavBar filterPost={filterPost} />
          <Header />
          <Table post={post} />
        </div>
      </div> :
      <div style={{ marginRight: "1rem", marginLeft: '1rem' }} >
        <MyNavBar active={`post`} hide={hide} name={`Posts`} />
        <div id='main'>
          <Search filterPost={filterPost} />
          <Table hide='hide' post={post} />
        </div>
      </div>
  )
}

export default AdminPost