import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = (e) => {
    const handlSubmit =()=>{
        e.prevetDefault();
        
        const data =new FormData(e.currentTarget);
        
        const address = {
            firstName: data.get('firstName')
            
        }

        console.log("address",address);
    }
    return (
        <div>
            <Grid container spacing={4}>
                {/* Left Section */}
                <Grid
                    item
                    xs={12}
                    className=" w-2/5 border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
                >
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard />
                        <Button
                            sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
                            size="large"
                            variant="contained"
                        >
                            Deliver Here
                        </Button>
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
