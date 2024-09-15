import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Auth/Home/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../Pages/Auth/Products/Products";
import ProductDetail from "../Pages/Auth/ProductDetail/ProductDetail";

const Auth = () => {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Auth;
