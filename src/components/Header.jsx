import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ hide }) => {
    const [active, setActive] = useState('blog')
    return (
        <div>
            <Navbar style={{ backgroundColor: 'white' }} expand="lg">
                <Navbar.Brand className='fw-bold' href="#home">Blog4Naija</Navbar.Brand>
                <Navbar.Toggle style={{ border: 'none' }} onClick={hide} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Link style={{ textDecoration: 'none' }} to={`/blog`}>
                        <Nav.Link onClick={() => setActive('blog')} style={{ fontWeight: 'bold' }} className={active === 'blog' ? `text-dark` : 'text-secondary'} href="#home">Blog</Nav.Link>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/love'>
                        <Nav.Link onClick={() => setActive('love')} style={{ fontWeight: 'bold' }} className={active === 'love' ? `text-dark` : 'text-secondary'} href="#link">Love Calculator</Nav.Link>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/movie'>
                        <Nav.Link onClick={() => setActive('movie')} style={{ fontWeight: 'bold' }} className={active === 'movie' ? `text-dark` : 'text-secondary'} href="#link">Movies</Nav.Link>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/bank'>
                        <Nav.Link onClick={() => setActive('bank')} style={{ fontWeight: 'bold' }} className={active === 'bank' ? `text-dark` : 'text-secondary'} href="#link">Banking</Nav.Link>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/rate'>
                        <Nav.Link onClick={() => setActive('rate')} style={{ fontWeight: 'bold' }} className={active === 'rate' ? `text-dark` : 'text-secondary'} href="#link">Forex Rates</Nav.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header