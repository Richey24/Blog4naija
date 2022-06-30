const Header = ({ large }) => {
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
            fontSize: large ? '16px' : '14px',
            lineHeight: '20px',
            color: '#D05270',
            cursor: 'pointer'
        },
        comment1: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: large ? '16px' : '14px',
            lineHeight: '20px',
            cursor: 'pointer'
        },
        apply: {
            boxSizing: "border-box",
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '2px 10px',
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
                large ? (
                    <>
                        <p style={style.p}>Comment</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '50%', flexWrap: 'wrap' }}>
                            <p style={style.comment}>All||</p>
                            <p style={style.comment1}>Administrators||</p>
                            <p style={style.comment}>Authors||</p>
                            <p style={style.comment1}>Subscriber||</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '45%' }}>
                            <select>
                                <option selected disabled hidden>Bulk action</option>
                                <option>Suspend</option>
                                <option>Delete</option>
                            </select>
                            <p style={style.apply}>Apply</p>
                            <select>
                                <option selected disabled hidden>Change Role</option>
                                <option>Administrator</option>
                                <option>Author</option>
                                <option>Subscriber</option>
                            </select>
                            <p style={style.apply}>Change</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', }}>
                            <p style={style.comment}>All||</p>
                            <p style={style.comment1}>Administrators||</p>
                            <p style={style.comment}>Authors||</p>
                            <p style={style.comment1}>Subscriber||</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '53%' }}>
                            <select>
                                <option selected disabled hidden>Bulk action</option>
                                <option>Suspend</option>
                                <option>Delete</option>
                            </select>
                            <p style={style.apply}>Apply</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '63%' }}>
                            <select>
                                <option selected disabled hidden>Change Role</option>
                                <option>Administrator</option>
                                <option>Author</option>
                                <option>Subscriber</option>
                            </select>
                            <p style={style.apply}>Change</p>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Header