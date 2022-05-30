import '../../../Dash.css'
import { useNavigate } from 'react-router-dom'
import home from '../../../img/home-select.svg'
import postImage from '../../../img/post.svg'
import comment from '../../../img/message.svg'
import media from '../../../img/download.svg'
import user from '../../../img/user.svg'
import setting from '../../../img/settings.png'
import logout from '../../../img/logout.svg'
import pages from '../../../img/documents.png'
import homeWhite from '../../../img/home-select-white.svg'
import postImagePink from '../../../img/post-pink.svg'
import commentPink from '../../../img/message-pink.svg'
import mediaPink from '../../../img/download-pink.svg'
import userPink from '../../../img/user-pink.svg'
import settingPink from '../../../img/settings-pink.png'
import pagesPink from '../../../img/documents-pink.svg'
const SideBar = ({ active }) => {
    const navigate = useNavigate()
    const logOut = () => {
        navigate('/')
    }
    return (
        <div>

            <div className='sideBar'>
                <p className='brandName'>Blog4Naija</p>
                <div className='myList'>
                    <p onClick={() => navigate('/admin')} className={active === 'dash' ? 'myActive' : 'notActive'}>
                        <img style={{ display: 'flex', justifyContent: 'left', paddingRight: '1rem' }} src={active === 'dash' ? home : homeWhite} alt='home' />
                        Dashboard
                    </p>
                    <p onClick={() => navigate('/adminpost')} className={active === 'post' ? 'myActive' : 'notActive'}>
                        <img style={{ display: 'flex', justifyContent: 'left', paddingRight: '1rem' }} src={active === 'post' ? postImagePink : postImage} alt='postImage' />
                        Posts
                    </p>
                    <p onClick={() => navigate('/pages')} className={active === 'page' ? 'myActive' : 'notActive'}>
                        <img style={{ display: 'flex', justifyContent: 'left', paddingRight: '1rem' }} src={active === 'page' ? pagesPink : pages} alt='pages' />
                        Pages
                    </p>
                    <p onClick={() => navigate('/comment')} className={active === 'comment' ? 'myActive' : 'notActive'}>
                        <img style={{ display: 'flex', justifyContent: 'left', paddingRight: '1rem' }} src={active === 'comment' ? commentPink : comment} alt='comment' />
                        Comments
                    </p>
                    <p onClick={() => navigate('/media')} className={active === 'media' ? 'myActive' : 'notActive'}>
                        <img style={{ display: 'flex', justifyContent: 'left', paddingRight: '1rem' }} src={active === 'media' ? mediaPink : media} alt='media' />
                        Media
                    </p>
                    <p onClick={() => navigate('/user')} className={active === 'user' ? 'myActive' : 'notActive'}>
                        <img style={{ display: 'flex', justifyContent: 'left', paddingRight: '1rem' }} src={active === 'user' ? userPink : user} alt='user' />
                        Users
                    </p>
                    <p onClick={() => navigate('/setting')} className={active === 'setting' ? 'myActive' : 'notActive'}>
                        <img style={{ display: 'flex', justifyContent: 'left', paddingRight: '1rem' }} src={active === 'setting' ? settingPink : setting} alt='setting' />
                        Settings
                    </p>
                    <p onClick={logOut} className='notActive'>
                        <img style={{ display: 'flex', justifyContent: 'left', paddingRight: '1rem' }} src={logout} alt='logout' />
                        Log Out
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem', paddingBottom: '1rem' }}>
                        <button className='addPost'><span className='newPost' style={{ paddingRight: '1rem' }}>+ </span><p className='newPost'> New Post</p></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar