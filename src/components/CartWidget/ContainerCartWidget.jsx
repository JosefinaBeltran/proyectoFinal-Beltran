import { Container, Button } from "react-bootstrap";
import FloatingCart from "./FloatingCart";
import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import "./ContainerCartWidget.css";

const ContainerCartWidget = () => {
	const { cart, totalPrice, emptyCart } = useContext(ProviderContext);
	const { showCart, setShowCart } = useContext(ProviderContext);

	const style = {
		display: showCart,
	};

	const closeCart = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};

	const clearCart = () => {
		emptyCart();
	};

	return (
		<Container className="container-cart" style={style}>
			<div className="containerClose">
				<Button variant="outline-danger" onClick={closeCart} className="closeButton">
					<h6 id="btn-cart">X</h6>
				</Button>
				<h4 style={{ color: "#fdf9f2", textAlign: "left" }}>
					Lista de productos:
				</h4>
			</div>
			<div>
				{cart.length === 0 ? (
					<span className="emptyCart">Todavía no seleccionaste nada.</span>
				) : (
					<div className="contenedorLista">
						{cart.map((product) => (
							<FloatingCart
								key={product.id}
								id={product.id}
								title={product.title}
								imagen={product.imagen}
								stock={product.stock}
								price={product.price}
							/>
						))}
					</div>
				)}
			</div>
			<div>
				{cart.length !== 0 && (
					<>
						<h2>Total de la compra: ${totalPrice()}</h2>
						<div className="containerBtnCart">
							<Button className="btn-common finalizar" >
								Finalizar
							</Button>
							<Button className="btn-common eliminar" onClick={clearCart}>
								Eliminar
							</Button>
						</div>
					</>
				)}
			</div>
		</Container>
	);
};

export default ContainerCartWidget;