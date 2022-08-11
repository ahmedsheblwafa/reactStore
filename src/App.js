import './App.css';
import MyNavbar from './components/MyNavbar'
import Products from './components/Products';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import { ProductDetails } from './components/ProductDetails';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import { useSelector } from "react-redux"

function App() {

  const user = useSelector(state => state.userLogged)

  return (

    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="loginform" element={user ? <Navigate to="/products" /> : <Login />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
