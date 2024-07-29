import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    let formField = new FormData();
    formField.append('name', name);
    formField.append('email', email);
    formField.append('password', password);

    try {
      const response = await axios.post('http://localhost:8000/api/user/', formField);
      console.log(response.data);
      setError(''); // Clear the error message
      navigate('/order');
    } catch (error) {
      if (error.response && error.response.data.email) {
        setError('Email is already registered');
      } else {
        setError('Registration failed. Please try again.');
      }
      console.error('Registration error:', error);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 block w-full px-3 py-2 bg-white border 
              border-gray-300 rounded-md shadow-sm placeholder-gray-400
               focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300
               rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
               focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='at least 8 characters'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          <p className='text-lg font-mono '>Have you already account?<Link to='signin' className='ml-3 font-bold hover:text-gray-800
           hover:underline text-lg'>Sign In</Link></p>
          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md
             shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none 
             focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
