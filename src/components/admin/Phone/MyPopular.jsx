import filter from '../../../img/filter.svg'
import user from '../../../img/user-pink.svg'
import view from '../../../img/view.svg'
import './MyPopular.css'
import './MyGraph.css'
const MyPopular = () => {
    return (
        <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            <div className='stat'>
                <h5>Popular Posts</h5>
                <p style={{ marginRight: '-1rem' }}><img src={filter} alt="date" />View</p>
            </div>
            <div className='myPopular'>
                <img src={user} alt="user" />
                <div className='myPostHook'>
                    <h5>React Hooks</h5>
                    <p>28 May 2022</p>
                </div>
                <div className='myPostViews'>
                    <img src={view} alt="view" />
                    <span>213,321</span>
                </div>
            </div>
            <div className='myPopular'>
                <img src={user} alt="user" />
                <div className='myPostHook'>
                    <h5>Ui Design Color</h5>
                    <p>28 May 2022</p>
                </div>
                <div className='myPostViews'>
                    <img src={view} alt="view" />
                    <span>213,321</span>
                </div>
            </div>
            <div className='myPopular'>
                <img src={user} alt="user" />
                <div className='myPostHook'>
                    <h5>React Hooks</h5>
                    <p>28 May 2022</p>
                </div>
                <div className='myPostViews'>
                    <img src={view} alt="view" />
                    <span>213,321</span>
                </div>
            </div>
        </div>
    )
}

export default MyPopular