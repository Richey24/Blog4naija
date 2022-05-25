import vector from '../../img/Vector.svg'
import { useNavigate } from 'react-router-dom'
import calender from '../../img/calender.svg'
import blogImage from '../../img/blog.jpg'
import medium from '../../img/medium.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'

const PostBody = ({ large, post }) => {
    let navigate = useNavigate()
    return (
        <div>
            <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '70px', marginTop: '12px', cursor: 'pointer' }}>
                <img style={{ height: '16px' }} src={vector} alt="vector" />
                <h6 style={{ fontWeight: 'bold', marginTop: '6px' }}>Back</h6>
            </div>
            <div>
                <p style={{ marginTop: '30px' }} className={large ? 'trend' : 'trend1'}>{post.title}</p>
                <p className={large ? 'trendText' : 'trendText1'}>{post.appUser ? post.appUser.firstName : null} {post.appUser ? post.appUser.lastName : null}<img src={calender} alt='calender' style={{ marginLeft: '6px', marginBottom: '4px', marginRight: '10px', width: '14px', height: '14px' }} />{post.createdDate}</p>
            </div>
            <img src={blogImage} alt="blog" style={{ width: '100%' }} loading="lazy" placeholder='blog image' />
            <div style={{ display: 'flex', marginTop: '20px' }}>
                {
                    large && (<p className='trendText'>Kindly Share This Post</p>)
                }
                {
                    large ? (
                        <div className='social'>
                            <button className='socialButton1'><img style={{ paddingRight: '0.6rem' }} src={twitter} alt='twitter' /> TWITTER</button>
                            <button className='socialButton2'><img style={{ paddingRight: '0.6rem' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                            <button className='socialButton3'><img style={{ paddingRight: '0.6rem' }} src={medium} alt='medium' /> MEDIUM</button>
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
                <p className={large ? 'content' : 'content1'}>{post.content}</p>
            </div>
        </div>
    )
}

export default PostBody