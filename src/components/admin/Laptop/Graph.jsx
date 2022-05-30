import date from '../../../img/date.svg'
import './Graph.css'
import { MyChart } from './MyChart'
const Graph = () => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <div className='stat'>
                <h5>View Statistic</h5>
                <p><img src={date} alt="date" />Yesterday</p>
            </div>
            <MyChart height={300} />
        </div>
    )
}

export default Graph