import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Card, CardContent, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Images/360_F_286323187_mDk3N4nGDaPkUmhNcdBe3RjSOfKqx4nZ.jpg';

const Signup = () => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        let isValid = true;

        for (let [name, value] of formData) {
            if (!value) {
                isValid = false;
                break;
            }
        }

        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        if (password !== confirmPassword) {
            isValid = false;
        }

        if (isValid) {
            const userData = {};
            formData.forEach((value, key) => {
                userData[key] = value;
            });
            localStorage.setItem('userData', JSON.stringify(userData));
            alert('User Registered SuccessFully')
            navigate('/login');
        } else {
            setShowError(true);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card sx={{ width: '100%', maxWidth: 400 }}>
                    <CardContent>
                        <Typography variant="h6" align="center" style={{ marginBottom: "30px" }}>Sign Up</Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Username"
                                        name="username"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Phone Number"
                                        name="phoneNumber"
                                        type="tel"
                                        size="small"
                                        inputProps={{ maxLength: 10 }}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} display="flex" justifyContent="center">
                                    <Button variant="contained" color="primary" type="submit">
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        {showError && (
                            <Alert severity="error" onClose={() => setShowError(false)} sx={{ marginTop: '16px' }}>
                                Please fill in all the fields and ensure passwords match.
                            </Alert>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default Signup;
