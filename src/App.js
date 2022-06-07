import { Route, Routes, useLocation } from 'react-router-dom';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function App() {
  const location = useLocation();
  const disabled = (location.pathname=== "/login" || location.pathname === "/register") 
  const home = (location.pathname=== "/login")
  
  return (
    <div className="App">
    {disabled||<Announcement/>}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login disabled={disabled} />} />
      <Route path="/register" element={<Register disabled={disabled}/>} />
      <Route path="/product" element={<Product disabled={disabled}/>} />
      <Route path="/productlist" element={<ProductList products={<Products/>} />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>

    {home&&
      <>

    <Products/>
    <Newsletter/>
    <Footer/>
      </>}
    </div>
  );
}

export default App;
