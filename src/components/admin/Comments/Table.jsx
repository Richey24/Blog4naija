import { useEffect, useState } from 'react'
import './Table.css'
import axios from 'axios'
import { url } from '../../../Env'
import { Spinner, Alert } from 'react-bootstrap'

const Table = ({ large }) => {
    const [comments, setComments] = useState([])
    const [load, setLoad] = useState(false)
    const [show, setShow] = useState(true);
    const [smallLoad, setSmallLoad] = useState(false)
    const [trashLoad, setTrashLoad] = useState(false)
    useEffect(() => {
        (
            async () => {
                setLoad(true)
                let res = await axios.get(`${url}/api/blog/comments/getall`)
                let rep = res.data
                setComments(rep)
                setLoad(false)
                setTimeout(() => {
                    setShow(false)
                }, 5000)
            }
        )()
    }, [])

    const deleteComment = async (postId, commentId, replyId = 'null') => {
        setTrashLoad(true)
        let body = {
            commentId: commentId,
            postId: postId,
            replyId: replyId
        }
        let res = await axios.delete(`${url}/api/blog/delete/comment`, {
            data: body
        })
        let rep = await res.data
        setComments(rep.comments)
        setTrashLoad(false)
    }

    const unApproved = async (postId, commentId, replyId = 'null') => {
        setSmallLoad(true)
        let body = {
            commentId: commentId,
            postId: postId,
            replyId: replyId
        }
        await axios.post(`${url}/api/blog/comment/unauthorize`, body)
        let res1 = await axios.get(`${url}/api/blog/comments/getall`)
        let rep1 = res1.data
        setComments(rep1)
        setSmallLoad(false)
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            {large === 'small' && (
                <Alert show={show} variant="success">
                    <Alert.Heading>Limited Functionalites</Alert.Heading>
                    <p>
                        Kindly switch to a desktop to get access to all the Functionalites in this page
                    </p>
                </Alert>
            )}
            <table>
                <thead>
                    <th style={{ textAlign: 'left' }}></th>
                    <th>Name</th>
                    <th>Comment</th>
                    {large === 'large' && <th style={{ textAlign: 'center' }}>Commented On</th>}
                    <th style={{ textAlign: 'center' }}>{large === 'large' ? 'Submitted On' : 'Date'}</th>
                </thead>
                {
                    load ?
                        <Spinner animation="border" style={{ color: "#D05270" }} />
                        :
                        (
                            <tbody>
                                {
                                    comments.map((comment, i) => (
                                        <>

                                            <tr key={i}>
                                                <td style={{ textAlign: 'left' }}><input type='checkbox' /></td>
                                                <td className='commentName'>{comment.name}</td>
                                                <td style={{ width: large === "large" ? '389px' : "139px" }}>
                                                    <p className='commentContent'>{comment.content}</p>
                                                    {large === "large" ? <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '369px' }}>
                                                        <span style={{ color: '#D05270', cursor: 'pointer' }} onClick={() => unApproved(comment.postId, comment.id)}>{comment.authorize ? 'Unapprove' : 'Approve'}{smallLoad && '...'}</span>
                                                        <span style={{ cursor: 'pointer' }}>Reply</span>
                                                        <span style={{ cursor: 'pointer' }}>Quick Edit</span>
                                                        <span style={{ cursor: 'pointer' }} onClick={() => deleteComment(comment.postId, comment.id)}>Trash{trashLoad && '...'}</span>
                                                    </p> :
                                                        <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '109px' }}>
                                                            <span style={{ cursor: 'pointer' }} onClick={() => deleteComment(comment.postId, comment.id)}>Trash{trashLoad && '...'}</span>
                                                            <span style={{ color: '#D05270', cursor: 'pointer' }} onClick={() => unApproved(comment.postId, comment.id)}>{comment.authorize ? 'Unapprove' : 'Approve'}{smallLoad && '...'}</span>
                                                        </p>
                                                    }
                                                </td>
                                                {large === 'large' && <td style={{ textAlign: 'center' }}>{comment.postName}</td>}
                                                <td style={{ textAlign: 'center' }}>{new Date(comment.createdDate).toLocaleString()}</td>
                                            </tr>
                                            {comment.reply?.map((one, j) => (
                                                <tr key={j}>
                                                    <td style={{ textAlign: 'left' }}><input type='checkbox' /></td>
                                                    <td className='commentName'>{one.name}</td>
                                                    <td style={{ width: large === "large" ? '389px' : "139px" }}>
                                                        <p className='commentContent'>{one.content}</p>
                                                        {large === "large" ? <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '369px' }}>
                                                            <span style={{ color: '#D05270', cursor: 'pointer' }} onClick={() => unApproved(comment.postId, comment.id, one.id)}>{one.authorize ? 'Unapprove' : 'Approve'}{smallLoad && '...'}</span>
                                                            <span style={{ cursor: 'pointer' }}>Reply</span>
                                                            <span style={{ cursor: 'pointer' }}>Quick Edit</span>
                                                            <span style={{ cursor: 'pointer' }} onClick={() => deleteComment(comment.postId, comment.id, one.id)}>Trash{trashLoad && '...'}</span>
                                                        </p> :
                                                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '119px' }}>
                                                                <span style={{ cursor: 'pointer' }} onClick={() => deleteComment(comment.postId, comment.id, one.id)}>Trash{trashLoad && '...'}</span>
                                                                <span style={{ color: '#D05270', cursor: 'pointer' }} onClick={() => unApproved(comment.postId, comment.id, one.id)}>{one.authorize ? 'Unapprove' : 'Approve'}{smallLoad && '...'}</span>
                                                            </p>
                                                        }
                                                    </td>
                                                    {large === 'large' && <td style={{ textAlign: 'center' }}>{comment.postName}</td>}
                                                    <td style={{ textAlign: 'center' }}>{new Date(one.createdAt).toLocaleString()}</td>
                                                </tr>
                                            ))}
                                        </>
                                    ))
                                }
                            </tbody>
                        )
                }
            </table>
        </div>
    )
}

export default Table