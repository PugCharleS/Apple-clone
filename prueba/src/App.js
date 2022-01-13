import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

import "./App.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const greeting = "Bienvenido a Andoramen!";

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route
            exact
            path="/categoria/:idCategoria"
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route
            exact
            path="/detalle/:idDetalle"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
