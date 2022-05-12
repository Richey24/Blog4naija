import { Form, Button, Container } from 'react-bootstrap'
import Header from './Header'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useState } from 'react'

function Update() {

    let navigate = useNavigate()
    let { state } = useLocation()
    let [{ token }] = useCookies()
    let [fName, setFname] = useState(state.fName)
    let [lName, setLname] = useState(state.lName)
    let [address, setAddress] = useState(state.address)
    let [email, setEmail] = useState(state.email)
    let [age, setAge] = useState(state.age)

    const updateUser = async (event) => {
        event.preventDefault()
        let res = await axios.put(`https://test-jwt-employee.herokuapp.com/api/employee/update/${state.id}`, {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            address: event.target[3].value,
            age: event.target[4].value,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        let response = await res.data
        if (response) {
            navigate('/')
        }
    }

    return (
        <div>
            <Header />
            <h1 className="text-center">Employee Management System Update User</h1>
            <Container>
                <Form onSubmit={updateUser}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" value={state ? fName : null} onChange={(e) => setFname(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" value={state ? lName : null} onChange={(e) => setLname(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={state ? email : null} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" value={state ? address : null} onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRole">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter your age" value={state ? age : null} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Update