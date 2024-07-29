import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddProduct() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity,setQuantity]=useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate(); // Hook for programmatic navigation

    const AddProducts = async (e) => {
        e.preventDefault(); // Prevent default form submission

        let formField = new FormData();
        formField.append('name', name);
        formField.append('price', price);
        formField.append('description', description);
        formField.append('category', category);
        formField.append('quantity',quantity);

        if (image !== null) {
            formField.append('image', image);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/product/', formField);
            console.log(response.data);

            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                navigate('/products'); // Navigate to the home page
            }, 1000);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
  
 

    return (
        <div className='items-center bg-white justify-center min-h-screen bg-gray-100'>
            <div className="p-8 rounded-lg w-full max-wd-m">
                <h1 className='text-2xl font-bold mb-6 ml-96'>Add Products</h1>
                <form className='pl-36 ml-60 mr-80 shadow-sm h-5/6 mt-10' onSubmit={AddProducts}>
                    <div className='mb-6 w-max'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type='file'
                            placeholder='Enter product image'
                            name='image'
                            onChange={(e) => setImage(e.target.files[0])}
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type='integer'
                            placeholder='Enter product price'
                            name='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type='text'
                            placeholder='Enter product description'
                            name='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Quantity
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type='text'
                            placeholder='Enter product category'
                            name='category'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <button className='bg-blue-400 rounded text-sm font-mono
                         hover:bg-blue-500 w-28 -ml-20 mt-6 mb-10 h-10' type='submit'>
                            Add Product
                        </button>
                        {showAlert && (
                            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50'>
                                <div className='bg-white p-4 rounded-lg'>
                                    <p className='text-center text-gray-800'>Product added successfully!</p>
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
