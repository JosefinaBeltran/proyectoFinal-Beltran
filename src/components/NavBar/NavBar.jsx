import "./NavBar.css"
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
            <Container>
            <Navbar.Brand>
                <img className="logo" src={logo} alt="Logo de >CodeMate!" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navIcon" />

            <Navbar.Collapse id="basic-navbar-nav" className="navIcon">
                <Nav className="ms-auto"> 
                <Link to={"/preentrega2-beltran/"} className="nav-link">
                    Home
                </Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <Link
                    to={"/preentrega2-beltran/category/Fantasía"}
                    className="dropdown-item"
                    >
                    Fantasía
                    </Link>
                    <NavDropdown.Divider />
                    <Link
                    to={"/preentrega2-beltran/category/Terror"}
                    className="dropdown-item"
                    >
                    Terror
                    </Link>
                </NavDropdown>
                <Link to={"/preentrega2-beltran/contacto"} className="nav-link">
                    Contacto
                </Link>
                <CartWidget />
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar