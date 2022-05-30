import './MyHeader.css'
import clarity from '../../../img/clarity_note-line.svg'
import view from '../../../img/view.svg'
import add from '../../../img/add.svg'
import up from '../../../img/up.svg'
import { useNavigate } from 'react-router-dom'
const MyHeader = () => {
    const navigate = useNavigate()
    return (
        <div className='myMain'>
            <div className="myWelcome">
                <h6>Welcome User</h6>
                <p>Start your today blog experience with this quick links</p>
            </div>
            <div style={{ display: 'flex', width: '407px', marginLeft: '-2rem' }}>
                <ul>
                    <li onClick={() => navigate('/post')}><img src={clarity} alt='clarity' />Write a new post</li>
                    <li onClick={() => navigate('/')}><img src={view} alt='view' />View website</li>
                </ul>
                <ul>
                    <li onClick={() => navigate('/page')}><img src={add} alt="add" />Add new page</li>
                    <li onClick={() => navigate('/category')}><img src={add} alt="add" />Add new category</li>
                </ul>
            </div>
            <div className='myTotals'>
                <div className='myViews'>
                    <h5>2,223,215</h5>
                    <p>Total Views <span><img src={up} alt="up" />+22</span></p>
                </div>
                <div className='myViews'>
                    <h5>2,223,215</h5>
                    <p>Total Comments <span><img src={up} alt="up" />+4</span></p>
                </div>
            </div>
        </div>
    )
}

export default MyHeader