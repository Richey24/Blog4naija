import { useEffect, useRef, useState } from "react"
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


const Edit = () => {
    const [text, setText] = useState("")
    const [selectedImage, setSelectedImage] = useState()
    const [mainImage, setMainImage] = useState([])
    const [active, setActive] = useState([])
    const firstInput = useRef(null)

    const getImage = (event) => {
        setSelectedImage(event.target.files[0])
        setMainImage([...mainImage, event.target.files[0]])
        setText(text + '\n')
    }

    const editText = (command, value = null) => {
        document.execCommand(command, true, value)
        if (active.includes(command)) {
            let newActive = active.filter((act) => act !== command)
            setActive(newActive)
        } else {
            setActive([...active, command])
        }
        console.log(active);
    }

    useEffect(() => {

    }, [])

    const hide = (id) => {
        document.getElementById(id).classList.toggle("hide")
    }

    return (
        <div>
            <h3 className="addHeading">ADD A NEW POST</h3>
            <div className="addContainer">
                <div className="addGrid1">
                    <input type="text" placeholder="Blog Post Title" className="gridInput" />
                    <p className="permalink">Permalink: <h6> http://erosupdate.com/sample-blog-post/ </h6> <span>Edit</span></p>

                    <div className="addTools">
                        <input hidden type='file' id='addMedia' />
                        <label style={{ marginBottom: '15px' }} htmlFor="addMedia" className="addMedia"><img src={img} alt="" /> Add Media</label>
                        <select className="paragraph">
                            <option value="Paragraph" selected>Paragraph</option>
                            <option value="Heading">Heading</option>
                            <option value="SubHeading">SubHeading</option>
                        </select>
                        <img style={{ backgroundColor: active.includes("bold") ? "gray" : '' }} onClick={() => { editText("bold") }} src={bold} alt="" />

                        <img style={{ backgroundColor: active.includes("italic") ? "gray" : '' }} onClick={() => { editText("italic") }} src={italic} alt="" />

                        <img style={{ backgroundColor: active.includes("strikeThrough") ? "gray" : '' }} onClick={() => { editText("strikeThrough") }} src={strike} alt="" />

                        <img style={{ backgroundColor: active.includes("underline") ? "gray" : '' }} onClick={() => { editText("underline") }} src={underline} alt="" />
                        <img onClick={() => { editText("insertText", '""') }} src={quote} alt="" />
                        <img src={list} alt="" />
                        <img src={numList} alt="" />
                        <img src={left} alt="" />
                        <img src={center} alt="" />
                        <img src={right} alt="" />
                        <img src={link} alt="" />
                        <img src={form} alt="" />
                        <img src={undo} alt="" />
                        <img src={redo} alt="" />
                    </div>
                    <div contentEditable="true" className="addInput"></div>
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
                            <h5>Status:<h6 style={{ marginLeft: '5px' }}>Draft</h6><span style={{ marginLeft: '5px' }}>Edit</span></h5>
                            <h5>Visiblity:<h6 style={{ marginLeft: '5px' }}>Public</h6><span style={{ marginLeft: '5px' }}>Edit</span></h5>
                            <aside className="moveToTrash">
                                <h3>Move To Trash</h3>
                                <h4>Publish</h4>
                            </aside>
                        </section>
                    </div>
                    <br />
                    <div className="myPublish"><p>Featured Image</p> <img onClick={() => hide("featured")} src={poly} alt="poly" /></div>
                    <div className="featured" id="featured">
                        <input type="file" id="featuredImage" hidden />
                        <label className="featuredImage" htmlFor="featuredImage">Set featured image</label>
                    </div>
                    <br />
                    <div className="myPublish"><p>Categories</p> <img onClick={() => hide("selectCart")} src={poly} alt="poly" /></div>
                    <div className="selectCart" id="selectCart">
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: "70%", alignItems: 'center' }}><p>All Categories</p> <p className="featuredImage">Add new</p></div>
                        <label htmlFor="General"><input type="checkbox" value="General" /> General</label>
                        <br />
                        <label htmlFor="Technology"><input type="checkbox" value="Technology" /> Technology</label>
                        <br />
                        <label htmlFor="Health"><input type="checkbox" value="Health" /> Health</label>
                        <br />
                        <label htmlFor="Beauty"><input type="checkbox" value="Beauty" /> Beauty</label>
                        <br />
                        <label htmlFor="Tutorial"><input type="checkbox" value="Tutorial" /> Tutorial</label>
                        <br />
                        <label htmlFor="News"><input type="checkbox" value="News" /> News</label>
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