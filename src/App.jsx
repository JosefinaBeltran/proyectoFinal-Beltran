import NavBar from "./Components/NavBar/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contacto from "./Components/Contacto/Contacto"
import { ShopProvider } from "./components/Context/ProviderContext"
import Cart from "./Components/Cart/Cart"


function App() {
	return (
		<>
			<ShopProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route main path="/proyectoFinal-Beltran/" element={<ItemListContainer />} />
						<Route path="/proyectoFinal-Beltran/contacto" element={<Contacto />} />
						<Route path="/proyectoFinal-Beltran/item/:id" element={<ItemDetailContainer />} />
						<Route path="/proyectoFinal-Beltran/category/:idCategory" element={<ItemListContainer />} />
						<Route path="/proyectoFinal-Beltran/cart" element={<Cart />} />
					</Routes>
				</BrowserRouter>
			</ShopProvider>
		</>
	)
}

export default App