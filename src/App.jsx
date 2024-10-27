import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedCard from "./components/CardItems/DetailedCardContainer";
import Contacto from "./components/Contacto/Contacto";


function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					main
					path="/preentrega2-beltran/"
					element={<ItemListContainer />}
				/>
				<Route
					path="/preentrega2-beltran/contacto"
					element={<Contacto />}
				/>
				<Route
					path="/preentrega2-beltran/item/:id"
					element={<DetailedCard />}
				/>
				<Route
					path="/preentrega2-beltran/category/:idCategory"
					element={<ItemListContainer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App