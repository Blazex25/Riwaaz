import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus = [
    { lable: "on the way", value: "on_the_way" },
    { lable: "Delivered", value: "Delivered" },
    { lable: "Cancelled", value: "Cancelled" },
    { lable: "Returned", value: "Returned" },
]
const Order = () => {
    return (
        <div className='px:5 lg:px-20'>
            <Grid
                container
                spacing={3}
                sx={{
                    width: "100%",       
                    maxWidth: "1400px", 
                    margin: "auto",      
                }}
            >
                
                <Grid item xs={12} sm={4} md={4} lg={3.5}>
                    <div className="h-auto shadow-lg bg-white p-6 rounded-lg sticky top-5 w-full">
                        <h1 className="font-bold text-xl mb-6">Filter</h1>

                        <div className="space-y-4">
                            <h1 className="font-semibold">ORDER STATUS</h1>

                            {orderStatus.map((option) => (
                                <div key={option.value} className="flex items-center">
                                    <input
                                        defaultValue={option.value}
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                        className="ml-3 text-sm text-gray-600"
                                        htmlFor={option.value}
                                    >
                                        {option.lable}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-5'>
                        {[1,1,1,1,1].map((item) =><OrderCard />)}
                    </div>
                      
                </Grid>
            </Grid>
        </div>
    )
}

export default Order