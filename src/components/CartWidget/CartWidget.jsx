import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import "./CartWidget.css"; // Asegúrate de tener este archivo

const CartWidget = () => {
	const { qtyInCart, setShowCart, showCart } = useContext(ProviderContext);
	const cartShowed = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};

	return (
		<div className="carrito" onClick={cartShowed}>
			🛒
			<span className="badge">{qtyInCart()}</span>
		</div>
	);
};

export default CartWidget;
