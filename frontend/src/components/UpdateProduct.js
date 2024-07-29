import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const loadProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
      console.log("Loaded product data:", data);

      setImage(data.image);
      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
      setCategory(data.category);
    } catch (error) {
      console.error("Error loading product:", error);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    } else {
      setImage(null);
      setImageFile(null);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Update button clicked");
    let formField = new FormData();
    formField.append('name', name);
    formField.append('price', price);
    formField.append('description', description);
    formField.append('category', category);

    if (imageFile) {
      formField.append('image', imageFile);
    }

    try {
      const response = await axios({
        method: 'PUT',
        url: `http://localhost:8000/api/${id}/`,
        data: formField
      });
      console.log("Update response data:", response.data);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className='items-center bg-white justify-center min-h-screen bg-gray-100'>
      <div className="p-8 rounded-lg w-full ml-24 max-w-md">
        <h1 className='text-2xl font-bold mb-6'>Update Product</h1>
        <form className='shadow-sm h-5/6  mt-10' onSubmit={handleUpdate}>
          <div className='mb-6'>
            {image && <img src={image} alt="Product" className='mb-4' />}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type='file'
              placeholder='Enter product image'
              name='image'
              onChange={handleImageChange}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type='text'
              placeholder='Enter product name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type='text'
              placeholder='Enter product price'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type='text'
              placeholder='Enter product description'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type='text'
              placeholder='Enter product category'
              name='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button className='bg-blue-400 rounded text-md font-mono 
            hover:bg-blue-500 w-40 mt-6 mb-10 h-10' type='submit'>
              Update Product
            </button>
            {showAlert && (
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50'>
                <div className='bg-white p-4 rounded-lg'>
                  <p className='text-center text-gray-800'>Updated successfully!</p>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
