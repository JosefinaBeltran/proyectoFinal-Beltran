import { Row } from "react-bootstrap";
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ products, category }) => {
	return (
		<>
			<Row className="titulo-tienda">
				<h2>Nuestros Productos: {category}</h2>
			</Row>
			<Row xs={1} md={2} lg={4} className="g-4">
				{products.map((products) => (
					<Item products={products} key={products.id} />
				))}
			</Row>
		</>
	);
};

export default ItemList;
