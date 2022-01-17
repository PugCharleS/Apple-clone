import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { CartContextProvider } from "./context/cartContext";
import Home from "./components/Home/Home";
import { BuyBanner } from "./components/Banner/Banner";

import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/categoria/:id"
              element={
                <>
                  <BuyBanner
                    title={"Apple Products"}
                    subtitle={"Chip M1"}
                    img={
                      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-feature-m1-202104?wid=358&hei=352&fmt=png-alpha&.v=1617213643000"
                    }
                    price={"Consiguelo Desde $25,999 MXN."}
                    phrase={"Potencia el poder."}
                  />
                  <ItemListContainer />
                </>
              }
            />
            <Route
              exact
              path="/detalle/:id"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
