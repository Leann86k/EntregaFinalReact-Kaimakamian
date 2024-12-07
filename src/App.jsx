import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import MyNavbar from "./components/navbar/MyNavbar";
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<MyNavbar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />

					<Route path="producto/:category" element={<ItemListContainer />} />

					{/* Ruta para el detalle de un ítem */}
					<Route path="/item/:id" element={<ItemDetailContainer />} />

					<Route path="/cart" element={<Cart />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
