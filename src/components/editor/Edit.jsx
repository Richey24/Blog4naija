import { useState } from "react"
import './Edit.css'
import img from '../../img/dashicons_admin-media.svg'
import bold from '../../img/foundation_bold.svg'
import italic from '../../img/Frame 390.svg'
import underline from '../../img/ant-design_underline-outlined.svg'
import strike from '../../img/uil_text-strike-through.svg'
import undo from '../../img/bx_undo.svg'
import redo from '../../img/bx_redo.svg'
import quote from '../../img/bxs_quote-alt-left.svg'
import list from '../../img/fluent_text-bullet-list-ltr-16-regular.svg'
import numList from '../../img/Group 418.svg'
import left from '../../img/icomoon-free_paragraph-left.svg'
import right from '../../img/icomoon-free_paragraph-right.svg'
import center from '../../img/icomoon-free_paragraph-center.svg'
import link from '../../img/akar-icons_link-chain.svg'
import form from '../../img/fluent_form-28-regular.svg'
import poly from '../../img/Polygon 2.svg'
import axios from 'axios';
import { url } from './../../Env';
import { Spinner } from "react-bootstrap"


const Edit = () => {
    const [mainImage, setMainImage] = useState({})
    const [cat, setCat] = useState([])
    const [active, setActive] = useState([])
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState(false)

    const getImage = (event) => {
        setMainImage(event.target.files[0])
    }

    const getCat = (e) => {
        if (cat.includes(e.target.value)) {
            let newCat = cat.filter((one) => one !== e.target.value)
            setCat(newCat)
        } else {
            setCat([...cat, e.target.value])
        }
    }

    function placeCaretAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    const editText = (command, value = null) => {
        document.execCommand(command, true, value)
        if (active.includes(command)) {
            let newActive = active.filter((act) => act !== command)
            setActive(newActive)
        } else {
            setActive([...active, command])
        }
    }

    const uploadImage = (e) => {
        let inp = document.getElementById("addInput")
        placeCaretAtEnd(inp)
        let reader = new FileReader()
        reader.onload = function () {
            document.execCommand('insertImage', false, reader.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const hide = (id) => {
        document.getElementById(id).classList.toggle("hide")
    }

    const sendPost = async () => {
        setLoad(true)
        const content = document.getElementById("addInput").innerHTML
        let body = {
            title: title,
            content: content,
            category: cat[0],
            imageName: mainImage.name,
            userId: "629547a93e6e5a4b32dbef4d"
        }

        // let myFile = {
        //     file: mainImage
        // }
        console.log(body);
        let postContent = await axios.post(`${url}/api/blog/save`, body)
        let postRes = await postContent.data
        console.log(postRes);

        // let myImage = await axios.post(`${url}/api/blog/upload/image`, myFile)

        // let imageRes = await myImage.data
        // console.log(imageRes);
        setLoad(false)
    }

    return (
        <div>
            <h3 className="addHeading">ADD A NEW POST</h3>
            <div className="addContainer">
                <div className="addGrid1">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Blog Post Title" className="gridInput" />
                    <p className="permalink">Permalink: <h6> http://erosupdate.com/sample-blog-post/ </h6> <span>Edit</span></p>

                    <div className="addTools">
                        <input onChange={(e) => uploadImage(e)} hidden type='file' id='addMedia' />
                        <label style={{ marginBottom: '15px' }} htmlFor="addMedia" className="addMedia"><img src={img} alt="" /> Add Media</label>
                        <select onChange={(e) => editText('fontSize', e.target.value)} className="paragraph">
                            <option value="3" selected>Paragraph</option>
                            <option value="7">Heading</option>
                            <option value="5">SubHeading</option>
                        </select>
                        <img style={{ backgroundColor: active.includes("bold") ? "gray" : '' }} onClick={() => { editText("bold") }} src={bold} alt="" />

                        <img style={{ backgroundColor: active.includes("italic") ? "gray" : '' }} onClick={() => { editText("italic") }} src={italic} alt="" />

                        <img style={{ backgroundColor: active.includes("strikeThrough") ? "gray" : '' }} onClick={() => { editText("strikeThrough") }} src={strike} alt="" />

                        <img style={{ backgroundColor: active.includes("underline") ? "gray" : '' }} onClick={() => { editText("underline") }} src={underline} alt="" />
                        <img onClick={() => { editText("insertText", '""') }} src={quote} alt="" />
                        <img style={{ backgroundColor: active.includes("insertUnorderedList") ? "gray" : '' }} onClick={() => { editText("insertUnorderedList") }} src={list} alt="" />
                        <img style={{ backgroundColor: active.includes("insertOrderedList") ? "gray" : '' }} onClick={() => { editText("insertOrderedList") }} src={numList} alt="" />
                        <img onClick={() => { editText("justifyLeft") }} src={left} alt="" />
                        <img onClick={() => { editText("justifyCenter") }} src={center} alt="" />
                        <img onClick={() => { editText("justifyRight") }} src={right} alt="" />
                        <img onClick={() => { editText("createLink") }} src={link} alt="" />
                        <img src={form} alt="" />
                        <img onClick={() => { editText("undo") }} src={undo} alt="" />
                        <img onClick={() => { editText("redo") }} src={redo} alt="" />
                    </div>
                    <div contentEditable="true" className="addInput" id="addInput"></div>
                    <div className="wordCount">Word count: 0</div>
                </div>
                <div className="addGrid2">
                    <div className="myPublish"><p>Publish</p> <img onClick={() => hide("publish")} src={poly} alt="poly" /></div>
                    <div className="publish" id="publish">
                        <section className="mySect">
                            <aside className="draft">
                                <p>Save Draft</p>
                                <p>Preview</p>
                            </aside>
                            <h5>Status:<h6 style={{ marginLeft: '5px' }}>Draft</h6><span style={{ marginLeft: '5px', cursor: 'pointer' }}>Edit</span></h5>
                            <h5>Visiblity:<h6 style={{ marginLeft: '5px' }}>Public</h6><span style={{ marginLeft: '5px', cursor: 'pointer' }}>Edit</span></h5>
                            <aside className="moveToTrash">
                                <h3>Move To Trash</h3>
                                <h4 onClick={sendPost}>{load ? <Spinner className="mySpin" animation="border" /> : "Publish"}</h4>
                            </aside>
                        </section>
                    </div>
                    <br />
                    <div className="myPublish"><p>Featured Image</p> <img onClick={() => hide("featured")} src={poly} alt="poly" /></div>
                    <div className="featured" id="featured">
                        <input onChange={getImage} type="file" id="featuredImage" hidden />
                        <label className="featuredImage" htmlFor="featuredImage">Set featured image</label>
                    </div>
                    <br />
                    <div className="myPublish"><p>Categories</p> <img onClick={() => hide("selectCart")} src={poly} alt="poly" /></div>
                    <div className="selectCart" id="selectCart">
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: "70%", alignItems: 'center' }}><p>All Categories</p> <p className="featuredImage">Add new</p></div>
                        <label htmlFor="General"><input onClick={getCat} type="checkbox" value="General" /> General</label>
                        <br />
                        <label htmlFor="Technology"><input onClick={getCat} type="checkbox" value="Technology" /> Technology</label>
                        <br />
                        <label htmlFor="Health"><input onClick={getCat} type="checkbox" value="Health" /> Health</label>
                        <br />
                        <label htmlFor="Beauty"><input onClick={getCat} type="checkbox" value="Beauty" /> Beauty</label>
                        <br />
                        <label htmlFor="Tutorial"><input onClick={getCat} type="checkbox" value="Tutorial" /> Tutorial</label>
                        <br />
                        <label htmlFor="News"><input onClick={getCat} type="checkbox" value="News" /> News</label>
                    </div>
                    <br />
                    <div className="myPublish"><p>Tags</p> <img onClick={() => hide("selectTag")} src={poly} alt="poly" /></div>
                    <div className="selectTag" id="selectTag">
                        <p>Add a coma after a tag before another</p>
                        <input type="text" placeholder="Cake, Burger" />
                        <br />
                        <span>Honey</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit