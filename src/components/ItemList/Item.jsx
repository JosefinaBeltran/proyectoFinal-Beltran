import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import "./Item.css"; 

const Item = ({ products }) => {
	const { addToCart } = useContext(ProviderContext); // Obtener addToCart del contexto

	const handleAddToCart = () => {
		addToCart(products, 1); // Suponiendo que quieres agregar 1 al carrito
	};

	return (
		<Col lg={3} md={6} xs={12} className="columna">
			<Card className="item-card" key={products.id}>
				<Card.Img variant="top" src={`/Img/${products.imagen}`} alt={products.title} />
				<Card.Body>
					<Card.Title className="card-title">{products.title}</Card.Title>
					<Card.Text className="card-text">{products.category}</Card.Text>
					<h6 className="card-price" variant="primary">
						$ {products.price}
					</h6>
					<Col id="botonesItem">
						<Link to={`/proyectoFinal-Beltran/item/${products.id}`} id="addCart">
							<Button variant="primary">Ver más</Button>
						</Link>
						<Button
							className="btn-item-list"
							variant="outline-primary"
							id="addCart"
							onClick={handleAddToCart}>
							Agregar
						</Button>
					</Col>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Item;