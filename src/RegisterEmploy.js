import { Form, Button, Container } from 'react-bootstrap'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'


function RegisterEmploy() {
    let [{ token }] = useCookies()

    let navigate = useNavigate()

    const registerUser = async (event) => {
        event.preventDefault()
        let image = new FormData()
        image.append("file", event.target[2].files[0])
        let img = await axios.post('https://test-jwt-employee.herokuapp.com/api/employee/file/save', image, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        console.log(img);

        let res = await axios.post('https://test-jwt-employee.herokuapp.com/api/employee/save', {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            imageName: event.target[2].files[0].name,
            email: event.target[3].value,
            address: event.target[4].value,
            age: event.target[5].value,
            dateOfBirth: event.target[6].value
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
            <h1 className="text-center">Employee Management System Register Employee</h1>
            <Container>
                <Form onSubmit={registerUser}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>

                    <input type="file" name="image" />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRole">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter your age" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRole">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Enter your dob" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default RegisterEmploy