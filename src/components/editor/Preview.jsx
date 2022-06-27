import vector from '../../img/Vector.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import blogImage from '../../img/blog.jpg'
import medium from '../../img/medium.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'
import './Preview.css'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { db } from "../../db"
import { useLiveQuery } from "dexie-react-hooks"
import { url } from './../../Env';
import axios from 'axios'


const Preview = () => {
    let navigate = useNavigate()
    const [load, setLoad] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [large, setLarge] = useState(true)
    const location = useLocation()
    const posts = useLiveQuery(
        () => db.post.toArray()
    )

    const mainImage = location.state?.mainImage

    useEffect(() => {
        if (window.innerWidth >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
    }, [size])

    window.addEventListener('resize', () => { setSize(window.innerWidth) })

    const sendPost = async () => {
        setLoad(true)

        let body = {
            title: posts[0].title,
            content: posts[0].content,
            category: posts[0].category,
            imageName: mainImage?.name,
            userId: posts[0].userId
        }


        let postContent = await axios.post(`${url}/api/blog/save`, body)
        let postRes = await postContent.data
        console.log(postRes);
        if (mainImage) {
            let image = new FormData();
            image.append(
                "image",
                mainImage,
                mainImage?.name
            );
            await axios.post(`https://legalfxfinance.com/blog/upload`, image)
        }
        setLoad(false)
    }

    const clearPreview = () => {
        db.post.clear()
        navigate('/edit')
    }


    return (
        <div style={large ? { marginLeft: '6rem', marginRight: '6rem' } : { marginLeft: '1rem', marginRight: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '12px', cursor: 'pointer' }}>
                <div style={{ display: "flex", alignItems: 'center' }} onClick={clearPreview}>
                    <img style={{ height: '16px' }} src={vector} alt="vector" />
                    <h6 style={{ fontWeight: 'bold', marginTop: '6px' }}>Back</h6>
                </div>
                <h4 className='prePublish' onClick={sendPost}>{load ? <Spinner className="mySpin" animation="border" /> : "Publish"}</h4>
            </div>
            <div>
                {
                    posts?.map((post, i) => (
                        <p key={i} style={{ marginTop: '30px' }} className={large ? 'trend' : 'trend1'}>{post?.title}</p>
                    ))
                }
                {/* <p className={large ? 'trendText' : 'trendText1'}>{myPost.appUser ? myPost.appUser.firstName : null} {myPost.appUser ? myPost.appUser.lastName : null}<img src={calender} alt='calender' style={{ marginLeft: '6px', marginBottom: '4px', marginRight: '10px', width: '14px', height: '14px' }} />{myPost.createdDate}</p> */}
            </div>
            {
                posts?.map((post, i) => (
                    <img key={i} src={post?.imageName ? post.imageName : blogImage} alt="blog" style={{ width: '100%', height: large ? '500px' : 'auto' }} loading="lazy" placeholder='blog image' />
                ))
            }
            <div style={{ display: 'flex', marginTop: '20px', width: '100%', justifyContent: 'space-between' }}>
                {
                    large && (<p className='trendText'>Kindly Share This Post</p>)
                }
                {
                    large ? (
                        <div style={{ display: 'flex' }}>
                            <button className='socialButton111'><img style={{ paddingRight: '0.6rem' }} src={twitter} alt='twitter' /> TWITTER</button>
                            <button className='socialButton222'><img style={{ paddingRight: '0.6rem' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                            <button className='socialButton333'><img style={{ paddingRight: '0.6rem' }} src={medium} alt='medium' /> MEDIUM</button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <button className='socialButton11'><img style={{ height: '18.52px', width: '16.62px' }} src={twitter} alt='twitter' /> TWITTER</button>
                            <button className='socialButton22'><img style={{ height: '24.52px', width: '12.8px' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                            <button className='socialButton33'><img style={{ height: '20.52px', width: '12.62px' }} src={medium} alt='medium' /> MEDIUM</button>
                        </div>
                    )
                }
            </div>


            <div>
                <h5 className={large ? 'detail' : 'detail1'}>Blog Details</h5>
                {
                    posts?.map((post, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ __html: post?.content }} className={large ? 'mainContent' : 'mainContent1'}></div>
                    ))
                }
            </div>

        </div>
    )
}

export default Preview