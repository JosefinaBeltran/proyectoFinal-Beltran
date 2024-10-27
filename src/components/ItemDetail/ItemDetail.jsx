import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { ProviderContext } from "../Context/ProviderContext";

const ItemDetail = ({ item }) => {
	const { addToCart } = useContext(ProviderContext);
	const [qty, setQty] = useState(1);

	const handleRestar = () => {if (qty > 1) setQty(qty - 1);};

	const handleSumar = () => {if (qty < item.stock) setQty(qty + 1);};

	return (
		<Container className="container-detailed">
			<Row className="justify-content-center">
				<Card className="item-card" key={item.id}>
					<Card.Img variant="top" src={`/Img/${item.imagen}`} />
					<Card.Body>
						<Card.Title className="card-title">{item.title}</Card.Title>
						<Card.Text className="card-category">{item.category}</Card.Text>
						<Card.Text className="card-stock">Stock: {item.stock}</Card.Text>
						<Card.Text className="card-description">{item.description}</Card.Text>
						<h6 className="card-price">$ {item.price}</h6>
						<ItemCount
							qty={qty}
							handleRestar={handleRestar}
							handleSumar={handleSumar}
							handleAgregar={() => {
								addToCart(item, qty);
							}}
						/>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
};

export default ItemDetail;