import { useEffect, useState } from 'react';
import axios from 'axios';
import './Media.css';

const Main = ({ large }) => {
    const [posts, setPosts] = useState([])
    const [image, setImage] = useState([])
    useEffect(() => {
        (async () => {
            let res = await axios.get("https://legalfxfinance.com/blog/get/all/image")
            let rep = await res.data
            setPosts(rep)
            let onlyImage = rep.filter((img) => isImage(img))
            setImage(onlyImage);
        })()
    }, [])
    const style = {
        comment: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: large ? '16px' : "12px",
            lineHeight: '20px',
            color: '#D05270',
            cursor: 'pointer'
        },
        comment1: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: large ? '16px' : "12px",
            lineHeight: '20px',
            cursor: 'pointer'
        },
    }

    const imageType = ['jpg', 'jpeg', 'png', 'svg', 'webp']

    const isImage = (imageName) => {
        const iType = imageName.split(".")[1]
        if (imageType.includes(iType)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div style={{ marginTop: '1rem' }}>
            {
                large ? (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '50%', flexWrap: 'wrap' }}>
                            <p style={style.comment}>All Media|{posts.length}|</p>
                            <p style={style.comment1}>Image|{image.length}|</p>
                            <p style={style.comment}>Video||</p>
                            <p style={style.comment}>Document|2|</p>
                            <p style={style.comment}>Trash|2|</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', }}>
                            <p style={style.comment}>All Media |{posts.length}|</p>
                            <p style={style.comment1}>Image||</p>
                            <p style={style.comment}>Video||</p>
                            <p style={style.comment}>Document|2|</p>
                            <p style={style.comment}>Trash|2|</p>
                        </div>
                    </>
                )
            }

            <div className='mediaDiv'>
                {
                    posts.map((post, i) => (
                        <img key={i} src={`https://legalfxfinance.com/blog/image/${post}`} alt="postimage" />
                    ))
                }
            </div>
        </div>
    )
}

export default Main