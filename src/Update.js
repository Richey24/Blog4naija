import { Form, Button, Container } from 'react-bootstrap'
import Header from './Header'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Update() {

    let navigate = useNavigate()
    let { id } = useParams()

    useEffect(() => {

    }, [])

    const updateUser = () => {
        console.log('updating user');
        navigate('/')
    }

    return (
        <div>
            <Header />
            <h1 className="text-center">Employee Management System Update User</h1>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your first name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your last name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="email" placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="email" placeholder="Enter role" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={updateUser} variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Update