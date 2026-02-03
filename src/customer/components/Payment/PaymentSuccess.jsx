import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Alert, AlertTitle, Grid } from "@mui/material";

import { updatePayment } from "../../../State/Payment/Action";
import { getOrderById } from "../../../State/Order/Action";

import OrderTraker from "../Order/OrderTraker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState(null);

    const { orderId } = useParams();
    const dispatch = useDispatch();

    const { order } = useSelector((store) => store.order);

    // 🔹 Extract Razorpay payment ID
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setPaymentId(params.get("razorpay_payment_id"));
    }, []);

    // 🔹 Update payment & fetch order
    useEffect(() => {
        if (paymentId && orderId) {
            dispatch(updatePayment({ orderId, paymentId }));
            dispatch(getOrderById(orderId));
        }
    }, [dispatch, paymentId, orderId]);

    return (
        <div className="px-2 lg:px-36">

            {/* ✅ Success Message */}
            <div className="flex justify-center items-center">
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{ mb: 6, width: "fit-content" }}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulations! Your order has been placed successfully.
                </Alert>
            </div>

            {/* 🔄 Order Tracker */}
            <OrderTraker activeStep={1} />

            {/* 📦 ORDER DETAILS */}
            <div className="py-10 space-y-6">

                {/* 📍 Address – FULL WIDTH BLOCK */}
                {order?.shippingAddress && (
                    <div className="w-full">
                        <AddressCard address={order.shippingAddress} />
                    </div>
                )}

                {/* 🛒 Order Items – BELOW ADDRESS (STACKED) */}
                <div className="w-full space-y-4">
                    {order?.orderItems?.map((item) => (
                        <div
                            key={item._id}
                            className="border rounded-md p-4 flex gap-4 items-center"
                        >
                            {/* Image (trim from bottom only) */}
                            <div className="w-24 h-24 overflow-hidden rounded-md flex-shrink-0">
                                <img
                                    src={item.product?.imageUrl}
                                    alt={item.product?.title}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Details */}
                            <div className="space-y-1">
                                <p className="font-semibold">{item.product?.title}</p>
                                <p className="text-sm text-gray-600">Size: {item.size}</p>
                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                <p className="font-bold">₹{item.discountedPrice}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default PaymentSuccess;
