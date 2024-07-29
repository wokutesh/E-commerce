import React from 'react';

const Order = ({ order }) => {
 

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Order Summary</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Order Number: {order.id}</p>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Order Date: {order.date}</p>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Order Status: {order.status}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Items Purchased</dt>
            <dd className="mt-1 col-span-2 sm:col-span-2">
              <ul role="list" className="divide-y divide-gray-200">
                {order.items.map(item => (
                  <li key={item.id} className="py-4 flex items-center justify-between">
                    <div className="flex space-x-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-sm text-gray-500">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Pricing Details</dt>
            <dd className="mt-1 col-span-2 sm:col-span-2">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Subtotal</dt>
                  <dd className="mt-1 text-sm text-gray-900">${order.subtotal.toFixed(2)}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Shipping</dt>
                  <dd className="mt-1 text-sm text-gray-900">${order.shipping.toFixed(2)}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Taxes</dt>
                  <dd className="mt-1 text-sm text-gray-900">${order.taxes.toFixed(2)}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Discounts</dt>
                  <dd className="mt-1 text-sm text-gray-900">-${order.discounts.toFixed(2)}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="mt-1 text-base font-medium text-gray-900">${order.total.toFixed(2)}</dd>
                </div>
              </dl>
            </dd>
          </div>

          {/* Add more sections for shipping info, billing info, actions, etc. */}
        </dl>
      </div>
    </div>
  );
};

export default Order;
