import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';


const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>
                    Delivery Address
                </h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTraker activeStep={3} />
            </div>
            <Grid container spacing={3} className='space-y-5'>
                {[1, 1, 1, 1, 1].map((item, index) => (
                    <Grid
                        item
                        xs={12}
                        key={index}
                        className='shadow-xl rounded-md p-5 border bg-white'
                        sx={{ alignItems: "center", justifyContent: "space-between" }}
                        container
                        spacing={100}
                    >
                        <Grid item xs={8}>
                            <div className='flex items-center space-x-5'>
                                <img
                                    className='w-[5rem] h-[5rem] object-cover object-top rounded'
                                    src="https://levi.in/cdn/shop/files/003KR0005_1_frount_360x.jpg?v=1760525436"
                                    alt=""
                                />
                                <div className='space-y-2'>
                                    <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                                    <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                        <span>Color: Black</span>
                                        <span>Size: M</span>
                                    </p>
                                    <p>Seller: Levi's</p>
                                    <p>₹1099</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ color: deepPurple[500] }} className='flex items-center justify-end'>
                                <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2 text-2xl' />
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default OrderDetails