import { useState, useEffect } from "react"
import axios from "axios"
import { url } from "../../../Env"
const Header = ({ large }) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        (
            async () => {
                let arr = []
                let res = await axios.get(`${url}/api/blog/comments/getall`)
                let rep = res.data
                rep.map((one) => arr.push(...one.reply))
                arr.push(...rep)
                console.log(arr);
                setComments(arr)
            }
        )()
    }, [])
    const style = {
        div: {
            marginTop: '1rem'
        },
        p: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '26px',
            lineHeight: '31px',
            color: '#00000',
        },
        button: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            border: 'none',
            padding: '15px 35px 0 35px',
            background: '#D05270'
        },
        buttonDiv: {
            display: 'flex', justifyContent: 'center'
        },
        buttonP: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FFFFFF',
        },
        buttonSpan: {
            paddingRight: '1rem',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FFFFFF',
        },
        comment: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#D05270',
            cursor: 'pointer'
        },
        comment1: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '20px',
            cursor: 'pointer'
        },
        apply: {
            boxSizing: "border-box",
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '5px 10px',
            gap: '5px',
            fontFamily: 'Mulish',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#D05270',
            cursor: 'pointer',
            border: '1px solid #D05270'
        }
    }
    return (
        <div style={style.div}>
            {
                large === 'large' ? (
                    <>
                        <p style={style.p}>Comment</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '65%', flexWrap: 'wrap' }}>
                            <select>
                                <option selected disabled hidden>Bulk action</option>
                                <option>Approved</option>
                                <option>Unapproved</option>
                                <option>Trash</option>
                            </select>
                            <p style={style.apply}>Apply</p>
                            <p style={style.comment}>All|{comments.length}|</p>
                            <p style={style.comment1}>Approved|{comments.filter((comment) => comment.authorize === true)?.length}|</p>
                            <p style={style.comment}>Unapproved|{comments.filter((comment) => comment.authorize === false)?.length}|</p>
                            <p style={style.comment}>Trash|2|</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '55%' }}>
                            <select>
                                <option selected disabled hidden>Bulk action</option>
                                <option>Approved</option>
                                <option>Unapproved</option>
                                <option>Trash</option>
                            </select>
                            <p style={style.apply}>Apply</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', }}>
                            <p style={style.comment}>All|{comments.length}|</p>
                            <p style={style.comment1}>Approved|{comments.filter((comment) => comment.authorize === true)?.length}|</p>
                            <p style={style.comment}>Unapproved|{comments.filter((comment) => comment.authorize === false)?.length}|</p>
                            <p style={style.comment}>Trash|2|</p>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Header