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
import { useRef, useState } from 'react'
import axios from 'axios'
import { url } from '../../Env'
import { Spinner } from 'react-bootstrap'


const PostBody = ({ large, post, relatedPost, getPost }) => {
    let navigate = useNavigate()
    const [reply, setReply] = useState(false)
    const [load, setLoad] = useState(false)
    const [myPost, setMyPost] = useState(post)
    const [rID, setRID] = useState('')
    let input = useRef(null)
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
            fontSize: large ? '24px' : '14px',
            lineHeight: large ? '39px' : '17px',
            color: '#D05270',
            width: 'fit-content'
        },
        commentSpan: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: large ? '16px' : '10px',
            lineHeight: large ? '20px' : '12px',
            color: '#D05270',
            marginLeft: '3px',
            cursor: 'pointer'
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


    const textToSpeech = () => {
        if ('speechSynthesis' in window) {
            let speech = new SpeechSynthesisUtterance(post.content)
            window.speechSynthesis.speak(speech)
        } else {
            alert('your browser does not support text to speech')
        }
    }
    const getReply = (id) => {
        setRID(id)
        input.current.focus()
        setReply(true)
    }

    const submitComment = async (event) => {
        setLoad(true)
        event.preventDefault()
        let comment = {
            name: event.target.name.value,
            content: event.target.content.value
        }
        if (reply) {
            let res = await axios.post(`${url}/api/blog/add/reply/${rID}/${post.id}`, comment)
            let rep = await res.data
            setMyPost(rep)
            setLoad(false)
            setReply(false)
            event.target.name.value = ''
            event.target.content.value = ''
            document.getElementById("comment").lastElementChild.scrollIntoView()
            return
        } else {
            let res = await axios.post(`${url}/api/blog/add/comment/${post.id}`, comment)
            let rep = await res.data
            setMyPost(rep)
            console.log(rep);
            setLoad(false)
            event.target.name.value = ''
            event.target.content.value = ''
            document.getElementById("comment").lastElementChild.scrollIntoView()
        }
    }

    return (
        <div>
            <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '70px', marginTop: '12px', cursor: 'pointer' }}>
                <img style={{ height: '16px' }} src={vector} alt="vector" />
                <h6 style={{ fontWeight: 'bold', marginTop: '6px' }}>Back</h6>
            </div>
            <div>
                <p style={{ marginTop: '30px' }} className={large ? 'trend' : 'trend1'}>{myPost.title}</p>
                <p className={large ? 'trendText' : 'trendText1'}>{myPost.appUser ? myPost.appUser.firstName : null} {myPost.appUser ? myPost.appUser.lastName : null}<img src={calender} alt='calender' style={{ marginLeft: '6px', marginBottom: '4px', marginRight: '10px', width: '14px', height: '14px' }} />{myPost.createdDate}</p>
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

            <button onClick={textToSpeech}>Play</button>

            <div>
                <h5 className={large ? 'detail' : 'detail1'}>Blog Details</h5>
                <p dangerouslySetInnerHTML={{ __html: myPost.content }} className={large ? 'content' : 'content1'}></p>
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
                    <div id='comment' style={{ marginTop: '2rem' }}>
                        <h5 style={{ marginBottom: '2rem' }} className={large ? 'detail' : 'detail1'}>Comments ({myPost.comments?.filter((com) => com.authorize === true).length})</h5>
                        {
                            myPost.comments?.filter((com) => com.authorize === true).map((comment, i) => (
                                <div key={i} style={{ borderBottom: '0.324437px solid rgba(109, 125, 139, 0.22)', paddingBottom: '2rem', paddingTop: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '345px' }}>
                                        <p style={style.commentName}>{comment.name}</p>
                                        <span style={style.span}>{new Date(comment.createdDate).toLocaleString()}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.8rem' }}>
                                        <img src={user} alt="user" />
                                        <div style={{ marginLeft: '1rem' }}>
                                            <p style={style.commentText}>{comment.content}</p>
                                            {
                                                comment.reply?.filter((com) => com.authorize === true).map((one, i) => (
                                                    <div key={i}>
                                                        <span>{one.name}</span>
                                                        <br />
                                                        <span>{one.content}</span>
                                                        <br />
                                                    </div>
                                                ))
                                            }
                                            <span onClick={() => getReply(comment.id)} style={style.commentSpan}>reply</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div id='comment'>
                        <h5 style={{ marginBottom: '1rem' }} className={large ? 'detail' : 'detail1'}>Comments ({myPost.comments?.filter((com) => com.authorize === true).length})</h5>
                        {
                            myPost.comments?.filter((com) => com.authorize === true).map((comment) => (
                                <div style={{ borderTop: '0.324437px solid rgba(109, 125, 139, 0.22)', paddingBottom: '2rem', paddingTop: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: large ? '345px' : '180px' }}>
                                        <p style={style.commentName}>{comment.name}</p>
                                        <span style={style.span}>{new Date(comment.createdDate).toLocaleString()}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.8rem' }}>
                                        <img src={user} alt="user" />
                                        <div style={{ marginLeft: '1rem' }}>
                                            <p style={style.commentText}>{comment.content}</p>
                                            {
                                                comment.reply?.filter((com) => com.authorize === true).map((one, i) => (
                                                    <div key={i}>
                                                        <span>{one.name}</span>
                                                        <br />
                                                        <span>{one.content}</span>
                                                        <br />
                                                    </div>
                                                ))
                                            }
                                            <span onClick={() => getReply(comment.id)} style={style.commentSpan}>reply</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
                large ? (
                    <div style={{ width: '100%' }}>
                        <p className='conversationLarge'>Join The Conversation</p>
                        <form onSubmit={submitComment}>
                            <input name="name" ref={input} className='commentInputLarge' placeholder='Full Name' />
                            <textarea name="content" placeholder='Type Your Comment Here' className='commentTextLarge'></textarea>
                            <div style={{ display: 'flex', justifyContent: 'right' }}>
                                {
                                    load ? <button className='commentButton'><Spinner animation="border" variant="light" /></button> :
                                        <button className='commentButton'>{reply ? 'Submit Reply' : 'Submit Comment'}</button>
                                }
                            </div>
                        </form>
                    </div>
                ) : (
                    <div style={{ width: '327px' }}>
                        <p className='conversation'>Join The Conversation</p>
                        <form onSubmit={submitComment}>
                            <input name="name" ref={input} className='commentInput' placeholder='Full Name' />
                            <textarea name="content" placeholder='Type Your Comment Here' className='commentText'></textarea>
                            <div style={{ display: 'flex', justifyContent: 'right' }}>
                                {
                                    load ? <button className='commentButton'><Spinner animation="border" variant="light" /></button> :
                                        <button className='commentButton'>{reply ? 'Submit Reply' : 'Submit Comment'}</button>
                                }
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default PostBody