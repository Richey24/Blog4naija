import './Table.css'
import view from '../../../img/view.svg'

import { Spinner } from 'react-bootstrap'
const Table = ({ hide, post }) => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <table>
                <thead>
                    <th style={{ textAlign: 'center' }}>S/N</th>
                    <th>Title</th>
                    <th style={hide && { display: 'none' }}>Category</th>
                    <th style={{ textAlign: 'center' }}>Comment</th>
                    <th style={{ textAlign: 'center' }}>View</th>
                    <th style={{ textAlign: 'center' }} className='action'>Action</th>
                </thead>
                {
                    post?.length < 1 ? (
                        <Spinner animation='border' style={{ color: "#D05270" }} />
                    ) : (
                        <tbody>
                            {
                                post?.map((single, i) => (
                                    <tr key={i}>
                                        <td style={{ textAlign: 'center' }}>{i + 1}</td>
                                        <td style={{ paddingTop: '1rem' }} className='myPostHook'>
                                            <h5>{single.title}</h5>
                                            <p>{single.createdDate}</p>
                                        </td>
                                        <td style={hide && { display: 'none' }}><h6>{single.category}</h6></td>
                                        <td style={{ textAlign: 'center' }}>{single.comments?.length}</td>
                                        <td style={{ textAlign: 'center' }} className='theView'><img src={view} alt='view' /> <span>{single.view}</span></td>
                                        <td style={{ fontSize: '38px', cursor: 'pointer', textAlign: 'center', paddingBottom: '1.3rem' }}>...</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    )
                }
            </table>
        </div>
    )
}

export default Table