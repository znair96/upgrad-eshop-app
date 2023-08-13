import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import SignIn from "./components/LoginSignUpPage/SignIn";
// import SignUp from "./components/LoginSignUpPage/SignUp";
import SignInComponent from "./routes/signin.component";
import SignUpComponent from "./routes/signup.component";
import ProductListingComponent from "./routes/product-list.component";
import ModifyProductComponent from "./routes/modify-product.component";
import AddProductComponent from "./routes/add-product.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<SignInComponent />} />
        <Route path="signup" element={<SignUpComponent />} />
        <Route path="products" element={<ProductListingComponent />} />
        <Route path="modify-product" element={<ModifyProductComponent />} />
        <Route path="add-product" element={<AddProductComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
