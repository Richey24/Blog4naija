import axios from 'axios'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css'
import blog from '../../img/blog.jpg'
import { url } from '../../Env'

const Main = ({ name, filter, post }) => {
    const [active, setActive] = useState('all')
    const [page, setPage] = useState(1)
    const [spin, setSpin] = useState(false)
    const [posts, setPosts] = useState([])
    let [empty, setEmpty] = useState(false)
    let [offSet, setOffSet] = useState(0)
    let [fSpin, setFSpin] = useState(false)
    const loadMore = async () => {
        setSpin(true)
        let response = await axios.get(`${url}/api/blog/get/page?offSet=${offSet}&category=${active}&pageSize=10`)
        let result = await response.data
        setPosts([...posts, ...result.content])
        setSpin(false)
    }


    const filterPost = async (str) => {
        setFSpin(true)
        setActive(str)
        let response = await axios.get(`${url}/api/blog/get/page?offSet=0&category=${str}&pageSize=10`)
        let result = await response.data
        setPosts(result.content)
        result.content.length < 1 && setEmpty(true)
        setFSpin(false)
    }

    const getMore = () => {
        loadMore()
        setOffSet(offSet + 1)
    }

    useEffect(() => {
        loadMore()
        setOffSet(offSet + 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h4 className={name}>BLOG POSTS</h4>
            <br />
            <ul className={filter}>
                <li onClick={() => filterPost('all')} style={active === 'all' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>All</li>
                <li onClick={() => filterPost('tech')} style={active === 'tech' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Technology</li>
                <li onClick={() => filterPost('health')} style={active === 'health' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Health</li>
                <li onClick={() => filterPost('travel')} style={active === 'travel' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Travel</li>
                <li onClick={() => filterPost('beauty')} style={active === 'beauty' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Beauty</li>
                <li onClick={() => filterPost('tutorial')} style={active === 'tutorial' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Tutorial</li>
                <li onClick={() => filterPost('news')} style={active === 'news' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>News</li>
            </ul>
            <br />
            <div className={post}>
                {
                    posts.length < 1 || fSpin ? (
                        <>
                            {
                                empty ? (
                                    <p style={{ color: '#D05270', fontWeight: 'bold' }}>No Post In This Category</p>
                                ) : (
                                    <Spinner animation="border" style={{ color: "#D05270" }} />
                                )
                            }
                        </>
                    ) : posts.map((mainPost) => (
                        <div key={mainPost.id}>
                            <img loading='lazy' placeholder='blog photo' className={post === 'post1' ? 'img' : 'img1'} src={blog} alt='blog' />

                            <h6 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' }}>{mainPost.createdDate[0]}/{mainPost.createdDate[1]}/{mainPost.createdDate[2]}</h6>

                            <h3 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' } : { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' }}>{mainPost.title}</h3>

                            <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', color: '#424242', width: '590px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', color: '#424242', width: '327px' }}>{mainPost.content}.</p>

                            <Link style={{ textDecoration: 'none' }} to={`/more`}>
                                <p className={post === 'post' ? 'more' : 'more1'}>Read More</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
            {
                post === "post1" && (
                    <div className='mainLoad'>
                        <button onClick={getMore} className='load'>
                            {
                                spin ? (

                                    <Spinner animation="border" variant="light" />
                                ) : "Load More"
                            }
                        </button>
                    </div>
                )
            }
            {/* Pagination For The Blog */}
            {
                post === 'post' ? (
                    <div className='page'>
                        <p onClick={() => setPage(page === 1 ? 1 : page - 1)} className='pages'>{"<"}</p>
                        <p style={page === 1 ? { marginRight: '-1.3rem', backgroundColor: '#D05270', color: 'white' } : { marginRight: '-1.3rem', color: '#D05270' }} onClick={() => setPage(1)} className='pages1'>1</p>
                        <p style={page === 2 ? { marginRight: '-1.3rem', backgroundColor: '#D05270', color: 'white' } : { marginRight: '-1.3rem', color: '#D05270' }} onClick={() => setPage(2)} className='pages1'>2</p>
                        <p style={page === 3 ? { marginRight: '-1.3rem', backgroundColor: '#D05270', color: 'white' } : { marginRight: '-1.3rem', color: '#D05270' }} onClick={() => setPage(3)} className='pages1'>3</p>
                        <p style={page === 4 ? { marginRight: '-1.3rem', backgroundColor: '#D05270', color: 'white' } : { marginRight: '-1.3rem', color: '#D05270' }} onClick={() => setPage(4)} className='pages1'>4</p>
                        <p style={page === 5 ? { marginRight: '-1.3rem', backgroundColor: '#D05270', color: 'white' } : { marginRight: '-1.3rem', color: '#D05270' }} onClick={() => setPage(5)} className='pages1'>5</p>
                        <p style={{ marginRight: '-1.3rem', color: '#D05270' }} className='pages1'>...</p>
                        <p style={page === 24 ? { backgroundColor: '#D05270', color: 'white' } : { color: '#D05270' }} onClick={() => setPage(24)} className='pages1'>24</p>
                        <p onClick={() => setPage(page + 1)} className='pages'>{">"}</p>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Main