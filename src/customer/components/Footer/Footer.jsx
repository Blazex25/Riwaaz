import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid
                container
                spacing={25}
                justifyContent={"center"}
                className="bg-black text-white text-center mt-10" textAlign={"center"}
                sx={{ bgcolor: "black", color: "white", py: 2 }}
                
            > 

                <Grid item xs={12} sm={6} md={3} >
                    <div>
                        <Typography className='pb-5' variant='h6' align='right'>Company </Typography>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom align='right'>About </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom align='right'>BLOG</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom align='right'>press </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom align='right'>Jobs </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom align='right'>Partners </Button>
                    </div>



                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-5' variant='h6'>Solutions </Typography>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Marketing </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Insights </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Supports</Button>
                    </div>



                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <div>
                        <Typography className='pb-5' variant='h6'>Documentation</Typography>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>API Status</Button>
                    </div>




                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <div>
                        <Typography className='pb-5' variant='h6'>Legal </Typography>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Claim </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Terms&Conditions</Button>
                    </div>


                </Grid>
                
            </Grid>
            <Grid className="pt-8 pb-4 bg-black text-white" item xs={12}>
                    <Typography variant="body2" component="p" align="center" gutterBottom>
                        © 2024 Riwaaz, Inc. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center" gutterBottom>
                        Made with ❤️ in India
                    </Typography>
                    <Typography variant="body2" component="p" align="center" sx={{ fontSize: "0.75rem" }}>
                        Icons made by{" "}
                        <a
                            href="https://www.flaticon.com/free-icons/ecommerce"
                            title="ecommerce"
                            style={{ color: "#bbb", textDecoration: "none" }}
                        >
                            Freepik - Flaticon
                        </a>
                    </Typography>
                </Grid>
        </div>
    )
}

export default Footer