import './Table.css'
import userImage from '../../../img/user-pink.svg'
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
const Table = ({ large, users }) => {
    const [show, setShow] = useState(true);
    setTimeout(() => {
        setShow(false)
    }, 5000)
    return (
        <div>
            {!large && (
                <Alert show={show} style={{ backgroundColor: '#D05270' }}>
                    <Alert.Heading>Limited Information</Alert.Heading>
                    <p>
                        Kindly switch to a desktop to view all information in this page
                    </p>
                </Alert>
            )}
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        {large && (<th>Name</th>)}
                        {large && (<th>Email</th>)}
                        <th>Role</th>
                        <th style={{ width: '56px' }}>Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => (
                            <tr key={i}>
                                <td><input type="checkbox" /></td>
                                <td className='strongUserName'>
                                    <img src={userImage} alt="" />
                                    {user.userName}
                                </td>
                                {large && (<td>{user.firstName} {user.lastName}</td>)}
                                {large && (<td>{user.email}</td>)}
                                <td>{user.role}</td>
                                <td style={{ textAlign: 'center' }}>1</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table