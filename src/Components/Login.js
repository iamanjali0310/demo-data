import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Card, CardContent, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Images/360_F_286323187_mDk3N4nGDaPkUmhNcdBe3RjSOfKqx4nZ.jpg';

const Login = () => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData.username === username && userData.password === password) {
            alert('Login Success')
            navigate('/Home-page');
        } else {
            setShowError(true);
            alert('User is not Registered With Given Data')
        }
    };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card sx={{ width: '100%', maxWidth: 400 }}>
                    <CardContent>
                        <Typography variant="h6" align="center" style={{ marginBottom: "30px" }}>Login</Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Username"
                                        name="username"
                                        size="small"
                                        fullWidth
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        size="small"
                                        fullWidth
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} display="flex" justifyContent="center">
                                    <Button variant="contained" color="primary" type="submit">
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        {showError && (
                            <Alert severity="error" onClose={() => setShowError(false)} sx={{ marginTop: '16px' }}>
                                Invalid username or password.
                            </Alert>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default Login;
