import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

import AddressCard from '../AddressCard/AddressCard';
import CartItem from '../Cart/CartItem';
import { getOrderById } from '../../../State/Order/Action';
import { createPayment } from '../../../State/Payment/Action';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order, loading, error } = useSelector((store) => store.order);

  const queryParams = new URLSearchParams(location.search);
  const orderID = queryParams.get('orderID');

  useEffect(() => {
    if (orderID) {
      dispatch(getOrderById(orderID));
    }
  }, [dispatch, orderID]);

  const handleCheckout = () => {
    dispatch(createPayment(orderID));
  }

  if (loading) {
    return <div className="p-5 text-center font-semibold">Loading order details...</div>;
  }

  if (error) {
    return <div className="p-5 text-center text-red-600">{error}</div>;
  }

  if (!order) {
    return <div className="p-5 text-center font-semibold">No order found.</div>;
  }

  const shippingAddress = order?.shippingAddress;
  const orderItems = order?.orderItems || [];

  return (
    <div className="space-y-6">
      {/* Shipping Address */}
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={shippingAddress} />
      </div>

      {/* Order Items and Price Summary */}
      <div className="lg:grid grid-cols-3 gap-6 relative">
        {/* Order Items */}
        <div className="col-span-2 space-y-4">
          {orderItems.length > 0 ? (
            orderItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                address={shippingAddress}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No items in this order.</p>
          )}
        </div>

        {/* Price Summary */}
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5 rounded-md shadow-md space-y-4">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{order?.totalPrice || 0}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">₹{order?.discount || 0}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total</span>
                <span className="text-green-600">
                  ₹{order?.totalDiscountedPrice || 0}
                </span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
