import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Facebook from '../images/facebook.jpg';
import Instagram from '../images/instagram.jpg';
import Linkedln from '../images/linkedln.png';
import Twitter from '../images/twitter.png';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/product/');
      setProducts(response.data);  // Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <header className="bg-blue-500 font-serif p-6 flex justify-between items-center">
        <h1 className="text-white text-2xl">E-Commerce</h1>
        <nav className=''>
          <Link to="/" className="text-white hover:underline mx-2">Home</Link>
          <Link to='/about' className="text-white hover:underline mx-2">About</Link>
          <Link to="/contact-us" className="text-white  hover:underline mx-2">Contact</Link>
        </nav>
      </header>

      <section className="hero bg-red-200 text-center font-serif py-20">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Shop</h2>
        <p className="mb-6">Discover the best products at unbeatable prices!</p>
       
        <Link to="/products" className="bg-blue-500 text-white py-2 px-4 rounded">Shop Now</Link>
      </section>

      <section className="products font-serif py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-20 md:px-8">
          {products.map((product, index) => (
            <div key={index} className="shadow h-auto p-4 bg-white rounded-lg">
              <div className="h-48 flex justify-center items-center">
                <img className="max-h-full max-w-full" src={product.image} alt={product.name} />
              </div>
              <div className="font-serif text-sm mt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold">{product.name}</p>
                  <p className="">{product.price}$</p>
                </div>
              
                <Link to={`/products/${product.id}`} className="bg-blue-500 text-white text-md hover:bg-blue-600 py-2 px-4 rounded block text-center mt-4">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 mt-20">
        <div className="container mx-auto">
          <div className="flex">
            <div className="mx-60">
              <h4 className="text-xl font-bold font-serif mb-2">Social Media</h4>
              <div className="flex flex-col space-x-4 mt-2">
                <div className="flex mb-4">
                  <img src={Facebook} alt="Facebook" className="h-6 w-6 ml-4" />
                  <a href="https://www.facebook.com" className="text-blue-300 ml-2 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className="flex mb-4">
                  <img src={Twitter} alt="Twitter" className="h-6 w-6" />
                  <a href="https://www.twitter.com" className="text-blue-400 ml-2 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="flex mb-4">
                  <img src={Instagram} alt="Instagram" className="h-6 w-6" />
                  <a href="https://www.instagram.com" className="text-pink-300 ml-2 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="flex">
                  <img src={Linkedln} alt="Linkedln" className="h-6 w-6" />
                  <a href="https://www.linkedin.com" className="text-blue-400 ml-2 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="font-serif">
              <h4 className="text-xl font-bold mb-2">Help & Contact</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/about" className="text-gray-400 hover:underline">About Us</Link>
                <Link to="/contact-us" className="text-gray-400 hover:underline">Contact Us</Link>
                <Link to="/privacy-policy" className="text-gray-400 hover:underline">Privacy Policy</Link>
              </nav>
            </div>
          </div>
          <div className="text-center mt-6">
            <p>&copy; 2024 E-Commerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
