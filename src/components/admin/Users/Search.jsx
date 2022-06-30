import search from '../../../img/search.svg'

const Search = () => {
    const style = {
        div: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: '1rem'
        },
        button: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            border: 'none',
            height: '31px',
            padding: '6px 20px',
            background: '#D05270'
        },
        buttonDiv: {
            display: 'flex', justifyContent: 'center'
        },
        buttonP: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '10px',
            lineHeight: '20px',
            marginTop: '17px',
            color: '#FFFFFF',
        },
        buttonSpan: {
            paddingRight: '0.2rem',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FFFFFF',
        },
        myLabel: {
            display: 'flex',
            height: '31px',
            border: '0.769622px solid #F5F5F5',
            borderRadius: '30.7849px',
        },

        myInput: {
            width: '50vw',
            border: 'none',
            outline: 'none',
        },

        labelDiv: {
            height: '31px',
            alignItems: 'center',
            display: 'flex',
            paddingRight: '1rem',
        }
    }
    return (
        <div style={style.div}>
            <div style={style.labelDiv}>
                <label style={style.myLabel} htmlFor="myInput">
                    <img style={{ width: '20px', paddingTop: '10px' }} src={search} alt="search" />
                    <input placeholder='Search everything' id='myInput' type="text" style={style.myInput} />
                </label>
                <div></div>
            </div>
        </div>
    )
}

export default Search