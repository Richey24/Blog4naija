import './Nav.css'
import search from '../../../img/search.svg'
import noti from '../../../img/notification.svg'
import round from '../../../img/round.svg'
import user from '../../../img/user-pink.svg'
import { useState } from 'react'
const NavBar = ({ filterPost }) => {
    const [post, setPost] = useState('')
    const getFilter = (event) => {
        setPost(event.target.value)
        filterPost(event.target.value)
    }
    return (
        <div style={{ marginTop: '2rem', marginRight: '4rem', display: 'flex', justifyContent: 'center', flexWrap: 'nowrap' }}>
            <div className='labelDiv'>
                <label className='myLabel' htmlFor="myInput">
                    <img style={{ width: '20px', paddingTop: '10px' }} src={search} alt="search" />
                    <input placeholder='Search everything' value={post} onChange={getFilter} id='myInput' type="text" className='myInput' />
                </label>
                <var className='noti'>
                    <img style={{ width: '20px' }} src={noti} alt="notification" />
                    <sup><img src={round} alt='round' /></sup>
                </var>
            </div>
            <div className='userSide'>
                <img className='userImage' src={user} alt="user" />
                <div className='userNameSide'>
                    <p className='userName1'>Display Name</p>
                    <p className='userName'>Administrator</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar