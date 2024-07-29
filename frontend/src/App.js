import AddProduct from './components/AddProduct';
import HomePage from './components/HomePage';
import Products from './components/Products';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Privacy from './components/PrivacyPolicy';
import Order from './components/Order';
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from "./components/Registration";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/addproduct' element={<AddProduct />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/:id/update' element={<UpdateProduct />} />
          <Route exact path='/registration' element={<Registration />} />
          <Route exact path='/registration/signin' element={<SignIn />} />
          <Route exact path='/order' element={<Order />} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/privacy-policy' element={<Privacy />} />
          <Route exact path='/products/:productId' element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
