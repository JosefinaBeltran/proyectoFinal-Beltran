import { useContext } from "react";
import { Container, Card, Button, Col, Image } from "react-bootstrap";
import { ProviderContext } from "../Context/ProviderContext";
import "./FloatingCart.css";

const FloatingCart = ({ id, title, price, stock, imagen }) => {
	const { remove } = useContext(ProviderContext);

	return (
		<Container fluid className="itemInCart">
			<Card
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "row",
				}}
				className="cardImage"
			>
				<Col xs={6} md={3}>
					<Image src={`/Img/${imagen}`} alt={title} thumbnail />
				</Col>
				<Col
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
					}}
				>
					<span className="itemTitle">{title}</span>
					<span>Precio: ${price}</span>
					<Button variant="outline-danger" onClick={() => remove(id)}>
						Eliminar
					</Button>

				</Col>
			</Card>
		</Container>
	);
};

export default FloatingCart;
