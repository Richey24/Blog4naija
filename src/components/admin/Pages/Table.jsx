import './Table.css'
const Table = ({ hide }) => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <table>
                <thead>
                    <th style={{ textAlign: 'left' }}>S/N</th>
                    <th>Title</th>
                    <th style={{ textAlign: 'right' }} className='action'>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td style={{ paddingTop: '1rem', cursor: 'pointer' }} className='myPostHook'>
                            <h5>About</h5>
                            <p>6 June 2022</p>
                        </td>
                        <td style={{ fontSize: '38px', cursor: 'pointer', textAlign: 'right', paddingBottom: '1.3rem' }}>...</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td style={{ paddingTop: '1rem', cursor: 'pointer' }} className='myPostHook'>
                            <h5>Contact</h5>
                            <p>6 June 2022</p>
                        </td>
                        <td style={{ fontSize: '38px', cursor: 'pointer', textAlign: 'right', paddingBottom: '1.3rem' }}>...</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td style={{ paddingTop: '1rem', cursor: 'pointer' }} className='myPostHook'>
                            <h5>Privacy policy</h5>
                            <p>6 June 2022</p>
                        </td>
                        <td style={{ fontSize: '38px', cursor: 'pointer', textAlign: 'right', paddingBottom: '1.3rem' }}>...</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td style={{ paddingTop: '1rem', cursor: 'pointer' }} className='myPostHook'>
                            <h5>Love calculator</h5>
                            <p>6 June 2022</p>
                        </td>
                        <td style={{ fontSize: '38px', cursor: 'pointer', textAlign: 'right', paddingBottom: '1.3rem' }}>...</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td style={{ paddingTop: '1rem', cursor: 'pointer' }} className='myPostHook'>
                            <h5>Movie</h5>
                            <p>6 June 2022</p>
                        </td>
                        <td style={{ fontSize: '38px', cursor: 'pointer', textAlign: 'right', paddingBottom: '1.3rem' }}>...</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td style={{ paddingTop: '1rem', cursor: 'pointer' }} className='myPostHook'>
                            <h5>Banking</h5>
                            <p>6 June 2022</p>
                        </td>
                        <td style={{ fontSize: '38px', cursor: 'pointer', textAlign: 'right', paddingBottom: '1.3rem' }}>...</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td style={{ paddingTop: '1rem', cursor: 'pointer' }} className='myPostHook'>
                            <h5>Forex rate</h5>
                            <p>6 June 2022</p>
                        </td>
                        <td style={{ fontSize: '38px', cursor: 'pointer', textAlign: 'right', paddingBottom: '1.3rem' }}>...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table