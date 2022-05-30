import '../Laptop/Nav.css'
import search from '../../../img/search.svg'
import noti from '../../../img/notification.svg'
import round from '../../../img/round.svg'

const Search = () => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <div className='labelDiv'>
                <label className='myLabel' htmlFor="myInput">
                    <img style={{ width: '20px', paddingTop: '10px' }} src={search} alt="search" />
                    <input placeholder='Search everything' id='myInput' type="text" className='myInput' />
                </label>
                <var className='noti'>
                    <img style={{ width: '15px' }} src={noti} alt="notification" />
                    <sup><img src={round} alt='round' style={{ width: '5px' }} /></sup>
                </var>
            </div>
        </div>
    )
}

export default Search