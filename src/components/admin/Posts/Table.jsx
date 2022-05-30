import React from 'react'
import './Table.css'
import view from '../../../img/view.svg'
const Table = ({ hide }) => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <table>
                <thead>
                    <th>S/N</th>
                    <th>Title</th>
                    <th style={hide && { display: 'none' }}>Category</th>
                    <th>Comment</th>
                    <th>View</th>
                    <th className='action'>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td style={{ paddingTop: '1rem' }} className='postHook'>
                            <h5>React Post</h5>
                            <p>30 May 2022</p>
                        </td>
                        <td style={hide && { display: 'none' }}><h6>JavaScript</h6></td>
                        <td>12</td>
                        <td className='theView'><img src={view} alt='view' /> <span>234,454</span></td>
                        <td style={{ fontSize: '38px', cursor: 'pointer' }}>...</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td style={{ paddingTop: '1rem' }} className='postHook'>
                            <h5>React Post</h5>
                            <p>30 May 2022</p>
                        </td>
                        <td style={hide && { display: 'none' }}><h6>JavaScript</h6></td>
                        <td>12</td>
                        <td className='theView'><img src={view} alt='view' /> <span>234,454</span></td>
                        <td style={{ fontSize: '38px', cursor: 'pointer' }}>...</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td style={{ paddingTop: '1rem' }} className='postHook'>
                            <h5>React Post</h5>
                            <p>30 May 2022</p>
                        </td>
                        <td style={hide && { display: 'none' }}><h6>JavaScript</h6></td>
                        <td>12</td>
                        <td className='theView'><img src={view} alt='view' /> <span>234,454</span></td>
                        <td style={{ fontSize: '38px', cursor: 'pointer' }}>...</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td style={{ paddingTop: '1rem' }} className='postHook'>
                            <h5>React Post</h5>
                            <p>30 May 2022</p>
                        </td>
                        <td style={hide && { display: 'none' }}><h6>JavaScript</h6></td>
                        <td>12</td>
                        <td className='theView'><img src={view} alt='view' /> <span>234,454</span></td>
                        <td style={{ fontSize: '38px', cursor: 'pointer' }}>...</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td style={{ paddingTop: '1rem' }} className='postHook'>
                            <h5>React Post</h5>
                            <p>30 May 2022</p>
                        </td>
                        <td style={hide && { display: 'none' }}><h6>JavaScript</h6></td>
                        <td>12</td>
                        <td className='theView'><img src={view} alt='view' /> <span>234,454</span></td>
                        <td style={{ fontSize: '38px', cursor: 'pointer' }}>...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table