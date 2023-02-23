import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/SignUp";
import AddProduct from "../Pages/AddProduct";
import ProductList from "../Pages/ProductList";
import UpdateProduct from "../Pages/UpdateProduct";

const Navigation = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="updateproduct/:prodID" element={<UpdateProduct />} />
      </Routes>
    </section>
  );
};

export default Navigation;
