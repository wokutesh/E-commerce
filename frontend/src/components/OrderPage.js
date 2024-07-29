import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Order from './Order';

const OrderPage = () => {
  const [order, setOrder] = useState(null); // State to hold the order details
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to hold error information

  useEffect(() => {
    // Function to fetch order details from API
    const fetchOrder = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/order/'); // Replace with your actual endpoint
        setOrder(response.data); // Assuming response.data contains order details
        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        setError(error); // Set error state if request fails
        setLoading(false); // Set loading to false on error
      }
    };

    fetchOrder(); // Invoke the fetchOrder function when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Order Details</h1>

        {loading ? (
          <p className="mt-4 text-lg text-gray-600">Loading order details...</p>
        ) : error ? (
          <p className="mt-4 text-lg text-red-600">Error fetching order: {error.message}</p>
        ) : (
          order ? (
            <Order order={order} />
          ) : (
            <p className="mt-4 text-lg text-gray-600">No order found.</p>
          )
        )}
      </div>
    </div>
  );
};

export default OrderPage;
