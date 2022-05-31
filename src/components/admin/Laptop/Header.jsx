import './Head.css'
import clarity from '../../../img/clarity_note-line.svg'
import view from '../../../img/view.svg'
import add from '../../../img/add.svg'
import up from '../../../img/up.svg'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='mainDiv'>
            <div className='welcome'>
                <h6>Welcome User</h6>
                <p>Start your today’s blog experience with these quick links</p>
            </div>
            <ul>
                <li onClick={() => navigate('/post')}><img src={clarity} alt='clarity' />Write a new post</li>
                <li onClick={() => navigate('/')}><img style={{ marginRight: '13px' }} src={view} alt='view' />View website</li>
                <li onClick={() => navigate('/page')}><img style={{ marginRight: '13px' }} src={add} alt="add" />Add new page</li>
                <li onClick={() => navigate('/category')}><img style={{ marginRight: '13px' }} src={add} alt="add" />Add new category</li>
            </ul>
            <div className='myViews'>
                <h5>2,223,215</h5>
                <p>Total Views <span><img src={up} alt="up" />+22</span></p>
            </div>
            <div className='myViews'>
                <h5>2,223,215</h5>
                <p>Total Comments <span><img src={up} alt="up" />+4</span></p>
            </div>
        </div>
    )
}

export default Header