import { useEffect, useRef, useState } from "react"
import '../../App.css'

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
        document.getElementById('text1').focus()
        let myText = document.getElementById('text1')
        console.log(myText.childNodes);
        if (!selectedImage) return
        const imageUrl = URL.createObjectURL(selectedImage)
        document.execCommand('insertImage', true, imageUrl)
        let arr = Array.from(myText.childNodes)
        arr.reverse()
        myText.append(...arr)
        if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
            let range = document.createRange()
            range.selectNodeContents(myText)
            range.collapse(false)
            let sel = window.getSelection()
            sel.removeAllRanges()
            sel.addRange(range)
        } else if (typeof document.body.createTextRange !== "undefined") {
            let textRange = document.body.createTextRange()
            textRange.moveToElementText(myText)
            textRange.collapse(false)
            textRange.select()
        }
        // setPreview([...preview, imageUrl])
        return () => URL.revokeObjectURL(imageUrl)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImage])

    return (
        <div style={{ marginRight: '2rem' }}>
            <div className="mySpan">
                <span contentEditable="true" className='textArea' ref={firstInput} style={{ wordWrap: 'break-word' }} id="text1">
                </span>
                <label className="myLabel" htmlFor="upload"><input onInput={getImage} id='upload' style={{ display: 'none' }} type='file' />+</label>
            </div>
            <button onClick={() => makeBold('bold')}>make bold</button>
            <button onClick={() => makeBold('italic')}>make italic</button>
            <button onClick={() => makeBold('underline')}>underline</button>
            <button onClick={() => makeBold('formatBlock', 'H1')}>make heading</button>
            <button onClick={() => makeBold('createLink', 'http://localhost:3000')}>make link</button>
            <button onClick={() => makeBold('fontName', 'Arial')}>change font</button>
            <button onClick={() => makeBold('foreColor', '#D05270')}>set color</button>
            <button onClick={() => makeBold('fontSize', '1')}>set fontsize</button>
            <button onClick={() => makeBold('undo')}>undo</button>
            <button onClick={() => makeBold('redo')}>redo</button>
            <button onClick={() => makeBold('unlink')}>unlink</button>
            <button onClick={() => makeBold('justifyCenter')}>move center</button>
            <button onClick={() => makeBold('justifyLeft')}>move left</button>
            <button onClick={() => makeBold('justifyRight')}>move right</button>
        </div>
    )
}

export default Edit