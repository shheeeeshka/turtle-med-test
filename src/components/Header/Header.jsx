import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from 'react-router-dom';

const Header = () => {
    const isAdmin = true;

    return (
        <Navbar expand='xl' className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    <img src="/img/logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-xl' style={{ border: 'none' }} />
                <Navbar.Offcanvas
                    id='offcanvasNavbar-expand-xl'
                    aria-labelledby='offcanvasNavbarLabel-expand-xl'
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand-xl'>
                            Turtle
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="news">НОВОСТИ И ПЕРСПЕКТИВЫ</Nav.Link>
                            <Nav.Link as={Link} to="accreditation">АККРЕДИТАЦИЯ</Nav.Link>
                            <Nav.Link as={Link} to="articles">ЛЕКАРСТВА И БОЛЕЗНИ</Nav.Link>
                            <Nav.Link as={Link} to="/">НМО И ОБРАЗОВАНИЕ</Nav.Link>
                            <Nav.Link as={Link} to="/">АКАДЕМИЯ</Nav.Link>
                            <Nav.Link as={Link} to="/">ВИДЕО</Nav.Link>
                            <Nav.Link as={Link} to="/">ТОЧКА ПРИНЯТИЯ РЕШЕНИЯ</Nav.Link>
                            {
                                isAdmin ?
                                    <Nav.Link as={Link} to="admin">АДМИН ПАНЕЛЬ</Nav.Link> :
                                    null
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;