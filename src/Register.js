import { Form, Button, Container } from 'react-bootstrap'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

    let navigate = useNavigate()

    const registerUser = async (event) => {
        event.preventDefault()
        let res = await axios.post('https://test-jwt-employee.herokuapp.com/api/registration', {
            userName: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        })
        let response = await res.data
        if (response) {
            navigate('/login')
        }
    }

    return (
        <div>
            <Header />
            <h1 className="text-center">Employee Management System Register</h1>
            <Container>
                <Form onSubmit={registerUser}>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register