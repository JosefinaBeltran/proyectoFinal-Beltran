import "./CartWidget.css";
import { MdOutlineShoppingCart } from "react-icons/md";

function CartWidget() {
    return (
        <div className="carrito">
            <MdOutlineShoppingCart size="40px" color="#fdf9f2" />
            <span className="badge">7</span>
        </div>
    );
}

export default CartWidget;
