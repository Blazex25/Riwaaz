import { Button, TextField, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
    const navigate =useNavigate();
    const dispatch = useDispatch();
    

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
            };
        dispatch(login(userData))
        console.log("userData:", userData);
    };
    return (
        <div>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>


                <Box sx={{ mt: 3 }}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                    />
                </Box>

                <Box sx={{ mt: 3 }}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        fullWidth
                        autoComplete="new-password"
                    />
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ padding: "0.8rem 0", backgroundColor: "#9155FD" }}
                    >
                        Login
                    </Button>
                </Box>

            </Box>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p> If you don't have account ?</p>
                    <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Register</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
