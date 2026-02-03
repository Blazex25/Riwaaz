import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartState = useSelector(store => store.cart);
    const cartItems = cartState?.cart?.cartItems || [];

    useEffect(() => {
        dispatch(getCart());
    }, [cartState.deleteCartItem, cartState.UpdateCartItem,]);

    return (
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))
                ) : (
                    <p className="text-center mt-5">Your cart is empty</p>
                )}
            </div>

            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border p-4'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                    <hr />
                    <div className='space-y-3 font-semibold mb-10'>
                        <div className='flex justify-between pt-3'>
                            <span>Price</span>
                            <span>₹{cartState?.cart?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Discount</span>
                            <span className='text-green-600'>₹{cartState?.cart?.discount}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 font-bold'>
                            <span>Total</span>
                            <span className='text-green-600'>
                                ₹{cartState?.cart?.totalDiscountedPrice}
                            </span>
                        </div>
                    </div>

                    <Button
                        onClick={() => navigate('/Checkout?step=2')}
                        variant='contained'
                        className='w-full'
                        sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
