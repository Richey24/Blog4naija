import './Graph.css'
import filter from '../../../img/filter.svg'
import user from '../../../img/user-pink.svg'
import view from '../../../img/view.svg'
import './Popular.css'
const Popular = () => {
    return (
        <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
            <div className='stat'>
                <h5>Popular Posts</h5>
                <p><img src={filter} alt="date" />View</p>
            </div>
            <div className='popular'>
                <img src={user} alt="user" />
                <div className='postHook'>
                    <h5>React Hooks</h5>
                    <p>28 May 2022</p>
                </div>
                <div className='categories'>
                    <h6>Frontend</h6>
                    <h6>Development</h6>
                </div>
                <div className='postViews'>
                    <img src={view} alt="view" />
                    <span>213,321</span>
                </div>
            </div>
            <div className='popular'>
                <img src={user} alt="user" />
                <div className='postHook'>
                    <h5>Ui Design Color</h5>
                    <p>28 May 2022</p>
                </div>
                <div className='categories'>
                    <h6>Ui Design</h6>
                </div>
                <div className='postViews'>
                    <img src={view} alt="view" />
                    <span>196,425</span>
                </div>
            </div>
            <div className='popular'>
                <img src={user} alt="user" />
                <div className='postHook'>
                    <h5>React Hooks</h5>
                    <p>28 May 2022</p>
                </div>
                <div className='categories'>
                    <h6>React</h6>
                    <h6>JavaScript</h6>
                </div>
                <div className='postViews'>
                    <img src={view} alt="view" />
                    <span>178,567</span>
                </div>
            </div>
        </div>
    )
}

export default Popular