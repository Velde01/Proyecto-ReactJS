import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
