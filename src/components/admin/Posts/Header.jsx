import { useNavigate } from 'react-router-dom'

const Header = () => {
    const style = {
        div: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
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
        }
    }
    const navigate = useNavigate()
    return (
        <div style={style.div}>
            <p style={style.p}>Post</p>
            <div style={style.buttonDiv}>
                <button onClick={()=>navigate("/edit")} style={style.button}><span style={style.buttonSpan}>+</span><p style={style.buttonP}>New Post</p></button>
            </div>
        </div>
    )
}

export default Header