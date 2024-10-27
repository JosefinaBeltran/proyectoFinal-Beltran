import "./NavBar.css"
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import ContextCart from "../Context/ContextCart"
import ContainerCart from "../CartWidget/ContainerCartWidget"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<>
			<ContextCart>
				<Navbar bg="dark" data-bs-theme="dark" expand="lg">
					<Container>
                    <Navbar.Brand>
                        <img className="logo" src={logo} alt="Logo de >CodeMate!" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navIcon" />

                        <Navbar.Collapse id="basic-navbar-nav" className="navIcon">
                            <Nav className="ms-auto">
                                <Link to={"/proyectoFinal-Beltran/"} className="nav-link">
                                    Home
                                </Link>
                                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                    <Link to={"/proyectoFinal-Beltran/category/Fantasía"} className="dropdown-item">
                                        Fantasía
                                    </Link>
                                    <NavDropdown.Divider />
                                    <Link to={"/proyectoFinal-Beltran/category/Terror"} className="dropdown-item">
                                        Terror
                                    </Link>
                                    <NavDropdown.Divider />
                                    <Link
                                        to={"/Proyecto-Final-React-Flores/category/Ninos"}
                                        className="dropdown-item">
                                        Niños
                                    </Link>
                                </NavDropdown>
                                <Link to={"/proyectoFinal-Beltran/contacto"} className="nav-link">
                                    Contacto
                                </Link>
                                <Link
                                    to={"/Proyecto-Final-React-Flores/cart"}
                                    className="nav-link">
                                    Carrito
                                </Link>
                                <CartWidget />
                                <ContainerCart />
                            </Nav>
                        </Navbar.Collapse>
					</Container>
				</Navbar>
			</ContextCart>
		</>
	)
}

export default NavBar