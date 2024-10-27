import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Contacto from "./Components/Contacto/Contacto";
import { ShopProvider } from "./Components/Context/ProviderContext";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
	return (
		<ShopProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Navigate to="/proyectoFinal-Beltran/" />} />
					<Route path="/proyectoFinal-Beltran/" element={<ItemListContainer />} />
					<Route path="/proyectoFinal-Beltran/contacto" element={<Contacto />} />
					<Route path="/proyectoFinal-Beltran/item/:id" element={<ItemDetailContainer />} />
					<Route path="/proyectoFinal-Beltran/category/:idCategory" element={<ItemListContainer />} />
					<Route path="/proyectoFinal-Beltran/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</ShopProvider>
	);
}

export default App;
