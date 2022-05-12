import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function Header() {
    const [{ token }, setCookie, removeCookie] = useCookies(['cookie-name']);

    const logOut = () => {
        removeCookie("token")
        removeCookie("role")
    }
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Link style={{ textDecoration: "none" }} to={`/`}>
                        <Navbar.Brand className='text-light' href="#home">Ayodeji & Co Ltd</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link style={{ textDecoration: "none" }} to={`/login`}>
                                <Nav.Link href="#home" className='text-light'>Login</Nav.Link>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/register">
                                <Nav.Link href="#link" className='text-light'>Register</Nav.Link>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/adminregister">
                                <Nav.Link href="#link" className='text-light'>Register as admin</Nav.Link>
                            </Link>
                            {token ? (<Nav.Link href="#link" className='text-light' onClick={logOut}>Logout</Nav.Link>
                            ) : null}
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Faq</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Terms & Condition</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header