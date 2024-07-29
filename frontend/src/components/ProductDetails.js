import React, { useEffect, useState } from 'react';
import { useParams,Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    // Fetch product details from the API
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const deleteProduct=async(id)=>{

    await axios.delete(`http://localhost:8000/api/product/${id}/`)

     navigate('/')
  }

  return (
     <div className=''>
        <header className="bg-blue-500 font-serif p-6 flex justify-between items-center">
        <h1 className="text-white text-2xl">E-Commerce</h1>
        <nav>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to='/order' className="text-white mx-2">Order</Link>
          <Link to="/registration" className="text-white mx-2">Add Cart</Link>
        </nav>
      </header>
    <div className="max-w-4xl mx-auto my-10 p-5">
       
      <div className=" flex-col ml-60 shadow  font-serif md:flex-row">
        <div className="md:w-1/2 p-5">
          <img src={product.image} alt={product.name} className="w-full h-auto ml-36 rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 ml-36 p-5">
          <h1 className="text-xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-xl font-semibold mb-4">${product.price}

          </div>
          <div className="text-xl mb-4">{product.category}

          </div>
          <div className="text-xl font-semibold mb-4">total quantity : {product.quantity}

          </div>
        </div>
        <div className='flex ml-8 '>
      <Link to={`/$product.id/update`} className="bg-blue-500 text-white mb-10 ml-8
       text-md hover:bg-blue-600 py-2 rounded block w-20 text-center mt-4">Update</Link>
      <Link to="/delete" onClick={()=>deleteProduct(product.id)} className="bg-red-500 text-white mb-10 ml-80 float-right text-md hover:bg-red-600 py-2  rounded block w-20 text-center mt-4">Delete</Link>
    </div>
      </div>
      
    </div>
    </div>
  );
};

export default ProductDetails;
