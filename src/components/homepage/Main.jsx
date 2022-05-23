import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css'
import blog from '../../img/blog.jpg'

const Main = ({ name, filter, post }) => {
    const [active, setActive] = useState('all')
    const [page, setPage] = useState(1)
    const [spin, setSpin] = useState(false)
    return (
        <div>
            <h4 className={name}>BLOG POSTS</h4>
            <br />
            <ul className={filter}>
                <li onClick={() => setActive('all')} style={active === 'all' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>All</li>
                <li onClick={() => setActive('tech')} style={active === 'tech' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Technology</li>
                <li onClick={() => setActive('health')} style={active === 'health' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Health</li>
                <li onClick={() => setActive('travel')} style={active === 'travel' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Travel</li>
                <li onClick={() => setActive('beauty')} style={active === 'beauty' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Beauty</li>
                <li onClick={() => setActive('tutorial')} style={active === 'tutorial' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Tutorial</li>
                <li onClick={() => setActive('news')} style={active === 'news' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>News</li>
            </ul>
            <br />
            <div className={post}>
                <div>
                    <img loading='lazy' placeholder='blog photo' className={post === 'post1' ? 'img' : 'img1'} src={blog} alt='blog' />

                    <h6 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' }}>Nov 23 2020</h6>

                    <h3 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' } : { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' }}>Post Topic Will Go Here</h3>

                    <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', color: '#424242', width: '590px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', color: '#424242', width: '327px' }}>A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>

                    <Link style={{ textDecoration: 'none' }} to={`/more`}>
                        <p className={post === 'post' ? 'more' : 'more1'}>Read More</p>
                    </Link>
                </div>
                <div>
                    <img loading='lazy' className={post === 'post1' ? 'img' : 'img1'} src={blog} alt='blog' />

                    <h6 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' }}>Nov 23 2020</h6>

                    <h3 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' } : { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' }}>Post Topic Will Go Here</h3>

                    <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', color: '#424242', width: '590px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', color: '#424242', width: '327px' }}>A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>

                    <Link style={{ textDecoration: 'none' }} to={`/more`}>
                        <p className={post === 'post' ? 'more' : 'more1'}>Read More</p>
                    </Link>
                </div>
                <div>
                    <img loading='lazy' className={post === 'post1' ? 'img' : 'img1'} src={blog} alt='blog' />

                    <h6 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' }}>Nov 23 2020</h6>

                    <h3 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' } : { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' }}>Post Topic Will Go Here</h3>

                    <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', color: '#424242', width: '590px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', color: '#424242', width: '327px' }}>A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>

                    <Link style={{ textDecoration: 'none' }} to={`/more`}>
                        <p className={post === 'post' ? 'more' : 'more1'}>Read More</p>
                    </Link>
                </div>
                <div>
                    <img loading='lazy' className={post === 'post1' ? 'img' : 'img1'} src={blog} alt='blog' />

                    <h6 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' }}>Nov 23 2020</h6>

                    <h3 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' } : { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' }}>Post Topic Will Go Here</h3>

                    <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', color: '#424242', width: '590px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', color: '#424242', width: '327px' }}>A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>

                    <Link style={{ textDecoration: 'none' }} to={`/more`}>
                        <p className={post === 'post' ? 'more' : 'more1'}>Read More</p>
                    </Link>
                </div>
                {
                    post === "post1" && (
                        <button onClick={() => setSpin(!spin)} className='load'>
                            {
                                spin ? (

                                    <Spinner animation="border" variant="light" />
                                ) : "Load More"
                            }
                        </button>
                    )
                }
            </div>
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