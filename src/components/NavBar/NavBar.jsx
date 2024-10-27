import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import ContainerCart from "../CartWidget/ContainerCartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";

const NavBar = () => {
    const { qtyInCart } = useContext(ProviderContext);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="Logo de CodeMate!" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/proyectoFinal-Beltran/" className="nav-link">Home</Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <Link to="/proyectoFinal-Beltran/category/Fantasía" className="dropdown-item">Fantasía</Link>
                            <NavDropdown.Divider />
                            <Link to="/proyectoFinal-Beltran/category/Terror" className="dropdown-item">Terror</Link>
                        </NavDropdown>
                        <Link to="/proyectoFinal-Beltran/contacto" className="nav-link">Contáctanos</Link>
                        <Link to="/proyectoFinal-Beltran/cart" className="nav-link">
                            Carrito {qtyInCart() > 0 && `(${qtyInCart()})`} 
                        </Link>
                        <CartWidget />
                        <ContainerCart />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
