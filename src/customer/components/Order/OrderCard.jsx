import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate('/account/Order/${5}')} className='p-5 shadow-lg hover:shadow-2xl border'>
            <Grid container spacing={35} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6} >
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://levi.in/cdn/shop/files/003KR0005_1_frount_360x.jpg?v=1760525436" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Slim Mid Rise Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>

                </Grid>
                <Grid item xs={4}>
                    {true && <div><p>
                        <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                        <span>
                            Deliverd on March 03
                        </span>
                    </p>
                        <p className='text-xs'>
                            your item has been delivered
                        </p>
                    </div>}
                    {false && <p>
                        <span>
                            Expected Delivery On march 03
                        </span>
                    </p>}

                </Grid>


            </Grid>
        </div>
    )
}

export default OrderCard