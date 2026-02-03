import { Button, TextField, Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, getUser } from '../../State/Auth/Action';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwtToken");
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt])


    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);
        const userData = {
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            email: data.get('email'),
            password: data.get('password'),
            mobile: data.get('mobile'),
        };
        dispatch(register(userData))
        console.log("userData:", userData);
    };

    return (
        <div>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 3,
                        width: "100%"
                    }}
                >
                    <TextField
                        required
                        id="firstname"
                        name="firstname"
                        label="First Name"
                        fullWidth
                        autoComplete="given-name"
                    />

                    <TextField
                        required
                        id="lastname"
                        name="lastname"
                        label="Last Name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Box>

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
                <Box sx={{ mt: 3 }}>
                    <TextField
                        required
                        id="mobile"
                        name="mobile"
                        type="tel"
                        label="Mobile Number"
                        fullWidth
                        autoComplete="tel"
                        inputProps={{ maxLength: 10 }}
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
                        Register
                    </Button>
                </Box>

            </Box>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p> If you already have account ?</p>
                    <Button onClick={() => navigate("/login")} className='ml-5' size='small'>Login</Button>
                </div>
            </div>
        </div>

    );
};

export default RegisterForm;
