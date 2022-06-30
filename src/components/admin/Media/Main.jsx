import { useEffect, useState } from 'react';
import axios from 'axios';
import './Media.css';
import { Spinner, Modal, Button } from 'react-bootstrap';


const imageType = ['jpg', 'jpeg', 'png', 'svg', 'webp']
const videoType = ['mp4', 'mkv']
const docType = ['pdf', 'doc', 'docx', 'zip', 'html']

const isImage = (fileName) => {
    const iType = fileName.split(".")
    const fileType = iType[iType.length - 1]
    if (imageType.includes(fileType)) {
        return "Image"
    } else if (videoType.includes(fileType)) {
        return "Video"
    } else if (docType.includes(fileType)) {
        return "Document"
    } else {
        return "Invalid"
    }
}

const Main = ({ large, handleClose, show }) => {
    const [posts, setPosts] = useState([])
    const [image, setImage] = useState([])
    const [video, setVideo] = useState([])
    const [doc, setDoc] = useState([])
    const [load, setLoad] = useState(false)
    const [mainLoad, setMainLoad] = useState(false)

    useEffect(() => {
        (async () => {
            setLoad(true)
            let res = await axios.get("https://legalfxfinance.com/blog/get/all/image")
            let rep = await res.data
            setPosts(rep)
            let onlyImage = rep.filter((img) => isImage(img) === "Image")
            let onlyVideo = rep.filter((img) => isImage(img) === "Video")
            let onlyDoc = rep.filter((img) => isImage(img) === "Document")
            setImage(onlyImage);
            setVideo(onlyVideo);
            setDoc(onlyDoc);
            setLoad(false)
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

    const dragOver = (e) => {
        e.preventDefault()
    }

    const dropFile = async (e) => {
        e.preventDefault()
        handleClose()
        setMainLoad(true)
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
            let dragFile = e.dataTransfer.items[i].getAsFile()
            let dropFile = new FormData();
            dropFile.append(
                "image",
                dragFile,
                dragFile.name
            );
            axios.post('https://legalfxfinance.com/blog/upload', dropFile)
        }
        setMainLoad(false)
        setLoad(true)
        let res = await axios.get("https://legalfxfinance.com/blog/get/all/image")
        let rep = await res.data
        setPosts(rep)
        let onlyImage = rep.filter((img) => isImage(img) === "Image")
        let onlyVideo = rep.filter((img) => isImage(img) === "Video")
        let onlyDoc = rep.filter((img) => isImage(img) === "Document")
        setImage(onlyImage);
        setVideo(onlyVideo);
        setDoc(onlyDoc);
        setLoad(false)
    }

    const uploadImage = async (e) => {
        handleClose()
        setMainLoad(true)
        let image = new FormData();
        image.append(
            "image",
            e.target.files[0],
            e.target.files[0].name
        );
        await axios.post('https://legalfxfinance.com/blog/upload', image)
        setMainLoad(false)
        setLoad(true)
        let res = await axios.get("https://legalfxfinance.com/blog/get/all/image")
        let rep = await res.data
        setPosts(rep)
        let onlyImage = rep.filter((img) => isImage(img) === "Image")
        let onlyVideo = rep.filter((img) => isImage(img) === "Video")
        let onlyDoc = rep.filter((img) => isImage(img) === "Document")
        setImage(onlyImage);
        setVideo(onlyVideo);
        setDoc(onlyDoc);
        setLoad(false)
    }

    return (
        load ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <Spinner animation='border' style={{ color: "#D05270" }} />
        </div >
            :
            <div className={mainLoad ? "blurBack" : ""} style={{ marginTop: '1rem' }}>
                {
                    large ? (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '50%', flexWrap: 'wrap' }}>
                                <p style={style.comment}>All Media|{posts.length}|</p>
                                <p style={style.comment1}>Image|{image.length}|</p>
                                <p style={style.comment}>Video|{video.length}|</p>
                                <p style={style.comment}>Document|{doc.length}|</p>
                                <p style={style.comment}>Trash|2|</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', }}>
                                <p style={style.comment}>All Media|{posts.length}|</p>
                                <p style={style.comment1}>Image|{image.length}|</p>
                                <p style={style.comment}>Video|{video.length}|</p>
                                <p style={style.comment}>Document|{doc.length}|</p>
                                <p style={style.comment}>Trash|2|</p>
                            </div>
                        </>
                    )
                }
                {mainLoad && (<Spinner className="uploadSpin" animation='border' style={{ color: "#D05270" }} />)}
                <div className='mediaDiv'>
                    {
                        image.map((post, i) => (
                            <img key={i} src={`https://legalfxfinance.com/blog/image/${post}`} alt="postimage" />
                        ))
                    }
                    {
                        video.map((post, i) => (
                            <video key={i} src={`https://legalfxfinance.com/blog/image/${post}`} controls></video>
                        ))
                    }
                    {
                        doc.map((post, i) => (
                            <iframe key={i} src={`https://legalfxfinance.com/blog/image/${post}`} frameborder="0" title='pdf'></iframe>
                        ))
                    }
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Media</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mediaModalMain'>
                        <div onDrop={dropFile} onDragOver={dragOver} className="uploadMainMedia">
                            <input onChange={uploadImage} type="file" hidden id='myFile' />
                            <center>
                                <p>Drop files to upload</p>
                                <span>or</span>
                                <label htmlFor='myFile'>Select Files</label>
                            </center>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{ backgroundColor: '#D9758D', border: 'none', outline: 'none' }} onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
    )
}

export default Main