import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import blog from '../../img/blog.jpg'

const Main = ({ name, filter, post }) => {
    const [active, setActive] = useState('all')
    return (
        <div>
            <h4 className={name}>BLOG POSTS</h4>
            <ul className={filter}>
                <li onClick={() => setActive('all')} style={active === 'all' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>All</li>
                <li onClick={() => setActive('tech')} style={active === 'tech' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Technology</li>
                <li onClick={() => setActive('health')} style={active === 'health' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Health</li>
                <li onClick={() => setActive('travel')} style={active === 'travel' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Travel</li>
                <li onClick={() => setActive('beauty')} style={active === 'beauty' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Beauty</li>
                <li onClick={() => setActive('tutorial')} style={active === 'tutorial' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>Tutorial</li>
                <li onClick={() => setActive('news')} style={active === 'news' ? { borderBottom: '#D05270 solid 1px', color: '#D05270' } : null} className='list'>News</li>
            </ul>
            <div className={post}>
                <div>
                    <img className={post === 'post1' ? 'img' : 'img1'} src={blog} alt='blog' />

                    <h6 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' }}>Nov 23 2020</h6>

                    <h3 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' } : { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' }}>Post Topic Will Go Here</h3>

                    <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', color: '#424242', width: '590px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', color: '#424242', width: '327px' }}>A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>

                    <Link to={`/more`}>
                        <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '500', color: '#D05270', width: '116px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', color: '#D05270', width: '90px' }}>Read More</p>
                    </Link>
                </div>

                <div>
                    <img className={post === 'post1' ? 'img' : 'img1'} src={blog} alt='blog' />

                    <h6 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' }}>Nov 23 2020</h6>

                    <h3 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' } : { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' }}>Post Topic Will Go Here</h3>

                    <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', color: '#424242', width: '590px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', color: '#424242', width: '327px' }}>A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>

                    <Link to={`/more`}>
                        <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '500', color: '#D05270', width: '116px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', color: '#D05270', width: '90px' }}>Read More</p>
                    </Link>
                </div>

                <div>
                    <img className={post === 'post1' ? 'img' : 'img1'} src={blog} alt='blog' />

                    <h6 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', marginTop: '0.3rem', color: '#424242' }}>Nov 23 2020</h6>

                    <h3 style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' } : { fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '600', color: '#D05270' }}>Post Topic Will Go Here</h3>

                    <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', color: '#424242', width: '590px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', color: '#424242', width: '327px' }}>A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>

                    <Link to={`/more`}>
                        <p style={post === 'post' ? { fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '500', color: '#D05270', width: '116px' } : { fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', color: '#D05270', width: '90px' }}>Read More</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main