import { Form, Button, Container } from 'react-bootstrap'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function Login() {
    const [cookie, setCookie] = useCookies(['token', 'role'])
    let navigate = useNavigate()
    const loginUser = async (e) => {
        e.preventDefault()
        console.log(e.target[1].value);
        let res = await axios.post('https://test-jwt-employee.herokuapp.com/auth/login', {
            userName: e.target[0].value,
            password: e.target[1].value
        })
        let response = await res.data
        if (response.accessToken) {
            setCookie("token", response.accessToken)
            setCookie("role", response.role)
            navigate('/')
        }
    }

    return (
        <div>
            <Header />
            <h1 className="text-center">Employee Management System Login</h1>
            <Container>
                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your username with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep Me Signed In" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login