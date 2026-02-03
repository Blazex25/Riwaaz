import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../../State/Order/Action'

const DeliveryAddressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const address = {
            firstname: data.get('firstName'),
            lastname: data.get('lastName'),
            streetaddress: data.get('Address'),
            city: data.get('City'),
            state: data.get('State'),
            zipCode: data.get('Zip'),
            mobile: data.get('PhoneNumber'),
        };

        const orderData = { address, navigate }
        dispatch(createOrder(orderData))

        console.log("orderData", orderData);
    }
    return (
        <div>
            <Grid container spacing={4}>
                {/* Left Section */}
                <Grid
                    item
                    xs={12}
                    className="w-2/5 border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll bg-gradient-to-b from-purple-50 to-white"
                >
                    <div className="p-6 space-y-6">

                        {/* Heading */}
                        <div className="border-b pb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Delivery Information
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                
                            </p>
                        </div>

                        {/* Estimated Delivery */}
                        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
                            <span className="text-3xl">🚚</span>
                            <div>
                                <p className="font-medium text-gray-800">
                                    Fastest Delivery
                                </p>
                                <p className="text-sm text-gray-500">
                                    
                                </p>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-gray-700">
                                Why shop with us?
                            </h3>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">✅</span>
                                <p className="text-sm text-gray-600">
                                    100% Authentic Products
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">🔄</span>
                                <p className="text-sm text-gray-600">
                                    Easy  returns
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">🔒</span>
                                <p className="text-sm text-gray-600">
                                    Secure Payments
                                </p>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="bg-purple-50 border border-purple-200 rounded-md p-4">
                            <p className="text-sm text-purple-700">
                                
                            </p>
                        </div>

                    </div>
                </Grid>


                {/* Right Section */}
                <Grid item xs={12} className=" w-[55%]">
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handlSubmit}>
                            <Grid container spacing={3}>
                                <Grid item className="w-[48%]" xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />

                                </Grid>
                                <Grid item className="w-[48%]" xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />

                                </Grid>
                                <Grid item className="w-full" xs={12}>
                                    <TextField
                                        required
                                        id="Address"
                                        name="Address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="given-name"
                                        multiline
                                        rows={4}
                                    />

                                </Grid>
                                <Grid item className="w-[48%]" xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="City"
                                        name="City"
                                        label="City"
                                        fullWidth
                                        autoComplete="given-name"
                                    />

                                </Grid>
                                <Grid item className="w-[48%]" xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="State"
                                        name="State"
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete="given-name"
                                    />

                                </Grid>
                                <Grid item className="w-[48%]" xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="Zip"
                                        name="Zip"
                                        label="Zip / Postal code"
                                        fullWidth
                                        autoComplete="Shipping postal-code"
                                    />

                                </Grid>
                                <Grid item className="w-[48%]" xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="PhoneNumber"
                                        name="PhoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="given-name"
                                    />

                                </Grid>
                                <Grid item className="w-[48%]" xs={12} sm={6}>
                                    <Button
                                        sx={{ mt: 1.5, bgcolor: 'RGB(145 85 253)' }}
                                        size="large"
                                        variant="contained"
                                        type='submit'
                                    >
                                        Deliver Here
                                    </Button>


                                </Grid>
                            </Grid>
                        </form>
                    </Box>

                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm
