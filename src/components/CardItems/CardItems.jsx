import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function CardItems(props) {
	return (
		<Col className="columna">
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.imagen} />
				<Card.Body>
					<Card.Title>{props.nombre}</Card.Title>
					<Card.Text>{props.category}</Card.Text>
					<h6 className="card-price" variant="primary">
						{props.precio}
					</h6>
					<div className="card-buttons">
						<Link
							className="btn btn-primary btn-lg"
							to={`/preentrega2-beltran/item/${props.id}`}>
							Ver más
						</Link>{" "}
						<Button variant="outline-primary">
							<h6>
                                <MdOutlineShoppingCart size="40px" color="#fdf9f2" />
							</h6>
						</Button>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default CardItems;