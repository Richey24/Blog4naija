import vector from '../../img/Vector.svg'
import { useNavigate } from 'react-router-dom'
import calender from '../../img/calender.svg'
import blogImage from '../../img/blog.jpg'
import medium from '../../img/medium.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'
import related from '../../img/Rectangle 317.svg'
import user from '../../img/user-pink.svg'
import './PostBody.css'

const PostBody = ({ large, post, relatedPost, getPost }) => {
    let navigate = useNavigate()
    const style = {
        relatedTitle: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: large ? '24px' : '14px',
            lineHeight: large ? '29px' : '17px',
            color: '#424242',
            cursor: large ? '' : 'pointer',
            marginTop: '1rem'
        },
        relatedMain: {
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between'
        },
        commentName: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: large ? '32px' : '14px',
            lineHeight: large ? '39px' : '17px',
            color: '#D05270',
        },
        commentSpan: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: large ? '16px' : '10px',
            lineHeight: large ? '20px' : '12px',
            color: '#D05270',
            marginLeft: '3px'
        },
        span: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: large ? '16px' : '10px',
            lineHeight: large ? '20px' : '12px',
            color: '#6D7D8B',
            marginBottom: '0.7rem'
        },
        commentText: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: large ? '24px' : '14px',
            lineHeight: large ? '29px' : '17px',
            color: '#00000',
            marginBottom: '-0.1rem'
        }
    }
    return (
        <div>
            <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '70px', marginTop: '12px', cursor: 'pointer' }}>
                <img style={{ height: '16px' }} src={vector} alt="vector" />
                <h6 style={{ fontWeight: 'bold', marginTop: '6px' }}>Back</h6>
            </div>
            <div style={large ? { marginBottom: '-5rem' } : null}>
                <p style={{ marginTop: '30px' }} className={large ? 'trend' : 'trend1'}>{post.title}</p>
                <p className={large ? 'trendText' : 'trendText1'}>{post.appUser ? post.appUser.firstName : null} {post.appUser ? post.appUser.lastName : null}<img src={calender} alt='calender' style={{ marginLeft: '6px', marginBottom: '4px', marginRight: '10px', width: '14px', height: '14px' }} />{post.createdDate}</p>
            </div>
            <img src={blogImage} alt="blog" style={{ width: '100%', height: large ? '500px' : 'auto' }} loading="lazy" placeholder='blog image' />
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
                <p className={large ? 'content' : 'content1'}>{post.content}</p>
            </div>
            {
                large ? (
                    <div style={{ marginTop: '2rem', borderBottom: '0.5px solid #6D7D8B' }}>
                        <h5 style={{ marginBottom: '2rem' }} className={large ? 'detail' : 'detail1'}>Related Posts</h5>
                        <div style={style.relatedMain}>
                            {
                                relatedPost.map((single, i) => (
                                    <div onClick={() => getPost(single.id)} key={i} style={{ cursor: 'pointer' }}>
                                        <img src={related} alt="related" />
                                        <p style={style.relatedTitle}>{single.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div>
                        <h5 style={{ marginBottom: '1rem' }} className={large ? 'detail' : 'detail1'}>Related Posts</h5>
                        <ul>
                            {
                                relatedPost.map((single, i) => (
                                    <li onClick={() => getPost(single.id)} key={i} style={style.relatedTitle}>{single.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
            {
                large ? (
                    <div style={{ marginTop: '2rem' }}>
                        <h5 style={{ marginBottom: '2rem' }} className={large ? 'detail' : 'detail1'}>Comments (3)</h5>
                        <div style={{ borderBottom: '0.324437px solid rgba(109, 125, 139, 0.22)', paddingBottom: '2rem', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '345px' }}>
                                <p style={style.commentName}>Gold Machete</p>
                                <span style={style.span}>about 30min ago</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.8rem' }}>
                                <img src={user} alt="user" />
                                <div style={{ marginLeft: '1rem' }}>
                                    <p style={style.commentText}>This is my comment under this post</p>
                                    <span style={style.commentSpan}>reply</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ borderBottom: '0.324437px solid rgba(109, 125, 139, 0.22)', paddingBottom: '2rem', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '345px' }}>
                                <p style={style.commentName}>Gold Machete</p>
                                <span style={style.span}>about 30min ago</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.8rem' }}>
                                <img src={user} alt="user" />
                                <div style={{ marginLeft: '1rem' }}>
                                    <p style={style.commentText}>This is my comment under this post</p>
                                    <span style={style.commentSpan}>reply</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ borderBottom: '0.324437px solid rgba(109, 125, 139, 0.22)', paddingBottom: '2rem', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '345px' }}>
                                <p style={style.commentName}>Gold Machete</p>
                                <span style={style.span}>about 30min ago</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.8rem' }}>
                                <img src={user} alt="user" />
                                <div style={{ marginLeft: '1rem' }}>
                                    <p style={style.commentText}>This is my comment under this post</p>
                                    <span style={style.commentSpan}>reply</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h5 style={{ marginBottom: '1rem' }} className={large ? 'detail' : 'detail1'}>Comments (3)</h5>
                        <div style={{ borderTop: '0.324437px solid rgba(109, 125, 139, 0.22)', paddingBottom: '2rem', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: large ? '345px' : '180px' }}>
                                <p style={style.commentName}>Gold Machete</p>
                                <span style={style.span}>about 30min ago</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.8rem' }}>
                                <img src={user} alt="user" />
                                <div style={{ marginLeft: '1rem' }}>
                                    <p style={style.commentText}>This is my comment under this post</p>
                                    <span style={style.commentSpan}>reply</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ borderTop: '0.324437px solid rgba(109, 125, 139, 0.22)', paddingBottom: '2rem', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: large ? '345px' : '180px' }}>
                                <p style={style.commentName}>Gold Machete</p>
                                <span style={style.span}>about 30min ago</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.8rem' }}>
                                <img src={user} alt="user" />
                                <div style={{ marginLeft: '1rem' }}>
                                    <p style={style.commentText}>This is my comment under this post</p>
                                    <span style={style.commentSpan}>reply</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ borderTop: '0.324437px solid rgba(109, 125, 139, 0.22)', paddingBottom: '2rem', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: large ? '345px' : '180px' }}>
                                <p style={style.commentName}>Gold Machete</p>
                                <span style={style.span}>about 30min ago</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.8rem' }}>
                                <img src={user} alt="user" />
                                <div style={{ marginLeft: '1rem' }}>
                                    <p style={style.commentText}>This is my comment under this post</p>
                                    <span style={style.commentSpan}>reply</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                large ? (
                    <div style={{ width: '100%' }}>
                        <p className='conversationLarge'>Join The Conversation</p>
                        <input className='commentInputLarge' placeholder='Full Name' />
                        <textarea placeholder='Type Your Comment Here' className='commentTextLarge'></textarea>
                        <div style={{ display: 'flex', justifyContent: 'right' }}>
                            <button className='commentButton'>Submit Comment</button>
                        </div>
                    </div>
                ) : (
                    <div style={{ width: '327px' }}>
                        <p className='conversation'>Join The Conversation</p>
                        <input className='commentInput' placeholder='Full Name' />
                        <textarea placeholder='Type Your Comment Here' className='commentText'></textarea>
                        <div style={{ display: 'flex', justifyContent: 'right' }}>
                            <button className='commentButton'>Submit Comment</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PostBody