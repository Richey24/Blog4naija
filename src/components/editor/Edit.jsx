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


const Edit = () => {
    const [text, setText] = useState("")
    const [selectedImage, setSelectedImage] = useState()
    const [mainImage, setMainImage] = useState([])
    const firstInput = useRef(null)

    const getImage = (event) => {
        setSelectedImage(event.target.files[0])
        setMainImage([...mainImage, event.target.files[0]])
        setText(text + '\n')
    }

    const makeBold = (command, value = null) => {
        document.execCommand(command, true, value)
        document.getElementById('text1').focus()
    }

    useEffect(() => {

    }, [])

    return (
        <div style={{ marginRight: '2rem' }}>
            <h3 className="addHeading">ADD A NEW POST</h3>
            <div className="addContainer">
                <div className="addGrid1">
                    <input type="text" placeholder="Blog Post Title" className="gridInput" />
                    <p className="permalink">Permalink: <h6> http://erosupdate.com/sample-blog-post/ </h6> <span>Edit</span></p>

                    <div className="addTools">
                        <p className="addMedia"><img src={img} alt="" /> Add Media</p>
                        <select className="paragraph">
                            <option value="Paragraph" selected>Paragraph</option>
                            <option value="Heading">Heading</option>
                            <option value="SubHeading">SubHeading</option>
                        </select>
                        <img src={bold} alt="" />
                        <img src={italic} alt="" />
                        <img src={strike} alt="" />
                        <img src={underline} alt="" />
                        <img src={quote} alt="" />
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
                    <textarea className="addInput"></textarea>
                    <div className="wordCount">Word count: 0</div>
                </div>
                <div className="addGrid2">

                </div>
            </div>
        </div>
    )
}

export default Edit