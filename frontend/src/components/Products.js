import React, { useState, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate()
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/product/');
      setProducts(response.data); // Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleAddToCart = async (productId) => {
    try {
      const response = await fetch('http://localhost:8000/api/cart/add-to-cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      // Redirect to the cart page
      navigate('/cart');
    } catch (err) {
      console.error(err);
    }
  };
 
  return (
    <div>
      <header className="bg-blue-500 font-serif p-6 flex justify-between items-center">
        <h1 className="text-white text-2xl">E-Commerce</h1>
        <nav>
          <Link to="/" className="text-white hover:underline mx-2">Home</Link>
          <Link to='/about' className="text-white hover:underline mx-2">About</Link>
          <Link to="/contact-us" className="text-white hover:underline mx-2">Contact</Link>
        </nav>
      </header>

      <div className='flex shadow h-36 items-center'>
        <Form.Select className='max-w-sm ml-20 mr-40 mt-4'>
          <option>Shop by Category</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="sport-kits">Sport kits</option>
          <option value="construction-materials">Construction materials</option>
        </Form.Select>
        <input className='pl-6 mt-4 border h-10 w-4/5 mr-10 -ml-20 placeholder:text-gray-900 placeholder:font-mono font-serif' placeholder='Search anything' />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6 gap-8 mx-20 md:px-8">
        {products.map((product) => (
          <div key={product.id} className="shadow h-auto p-4 bg-white rounded-lg">
            <div className="h-48 flex justify-center items-center">
              <img className="max-h-full max-w-full" src={product.image} alt={product.name} />
            </div>
            <div className="font-mono text-sm mt-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">{product.name}</p>
                <p>{product.price}$</p>
              </div>
              <div className='flex  '>
                <Link to={`/products/${product.id}`} className='text-sm font-mono'>
                  <Button>Details</Button>
                </Link>
                <Link to='/cart' className="btn-add-to-cart">
        Add to Cart
      </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className='flex bg-gray-800 text-white py-6 mt-20'>
        <div className='container mx-auto'>
          <Link to='about' className='mr-6 font-mono text-md hover:underline'>About</Link>
          <Link to='contact-us' className='text-md hover:underline'>Contact</Link>
        </div>
      </footer>
    </div>
  );
}
