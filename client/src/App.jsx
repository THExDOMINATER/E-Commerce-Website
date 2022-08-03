import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
  import Success from "./pages/Success";
  import { useSelector } from "react-redux";

const App = () => {
    const user = false;
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/success" element={<Success />} />
                <Route path="/login" element={<Login />}
                {...user ? <Navigate to='/'/>: <Login/>} />
                
                <Route path="/register" element={<Register />} 
                {...user ? <Navigate to='/'/>: <Register/>}/>
                
                
            </Routes>
        </Router> 
    );
};

export default App;