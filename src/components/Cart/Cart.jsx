import { useContext } from "react";
import { Container, Card, Button, Col, Image } from "react-bootstrap";
import { ProviderContext } from "../Context/ProviderContext";
import "./Cart.css";

const Cart = () => {
	const { remove, cart, totalPrice } = useContext(ProviderContext);

	return (
		<Container fluid>
			<Card className="cartContainer">
				<Card.Body>
					<Card.Title>Productos seleccionados:</Card.Title>
					{cart.map((prod) => (
						<div key={prod.id} className="itemInCart">
							<Card className="cardImage" >
								<Col xs={4} md={3}>
									<Image 
										src={`/Img/${prod.imagen}`} 
										alt={prod.title} 
										thumbnail 
										className="productImage" 
									/>
								</Col>
								<Col className="productDetails">
									<span className="itemTitle">{prod.title}</span>
									<span>Cantidad: {prod.qty}</span>
									<span>Subtotal: {`$ ${(prod.qty * prod.price).toFixed(2)}`}</span>
								</Col>
								<Col xs={2} className="removeButtonCol">
									<Button 
										variant="outline-danger" 
										onClick={() => remove(prod.id)}
										className="removeButton" 
									>
										Eliminar
									</Button>
								</Col>
							</Card>
						</div>
					))}
					<h2 className="totalPrice">Total de compra: $ {totalPrice()}</h2>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Cart;