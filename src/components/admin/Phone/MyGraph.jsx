import date from '../../../img/date.svg'
import './MyGraph.css'
import { MyChart } from '../Laptop/MyChart'
const MyGraph = () => {
    return (
        <div style={{ marginTop: '1rem' }}>
            <div className='stat'>
                <h5>View Statistic</h5>
                <p style={{ marginRight: '-1rem' }}><img src={date} alt="date" />Yesterday</p>
            </div>
            <MyChart height={200} />
        </div>
    )
}

export default MyGraph