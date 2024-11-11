import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/navbar/MyNavbar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/itemlistcontainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        {/* Rutas para las categorías */}
        <Route
          path="/category/ubicacion"
          element={<ItemListContainer category="ubicacion" />}
        />
        <Route
          path="/plantas"
          element={<ItemListContainer category="plantas" />}
        />
        <Route
          path="/libros"
          element={<ItemListContainer category="libros" />}
        />
        <Route
          path="/macetas"
          element={<ItemListContainer category="macetas" />}
        />
        <Route
          path="/kit-cesped"
          element={<ItemListContainer category="kit-cesped" />}
        />
        <Route
          path="/category/kit-rosas"
          element={<ItemListContainer category="kit-rosas" />}
        />

        {/* Ruta para el detalle de un ítem */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
