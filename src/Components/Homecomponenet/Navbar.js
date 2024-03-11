import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            setUserData(storedUserData);
        }
    }, []);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-dark"
            style={{ backgroundColor: 'rgba(70, 130, 180, 0.8)' }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TMDB</Link>

                <div className="d-flex justify-content-end align-items-center">
                    <Link className="nav-link me-2" onClick={togglePopup}>
                        <AccountCircleIcon style={{ fontSize: '2.5rem', color: 'white' }} />
                    </Link>

                    {isPopupOpen && userData && (
                        <div className="position-absolute top-100 end-0 p-2 rounded"
                            style={{ backgroundColor: '#f4f4f1', color: 'black', textAlign: 'left', marginRight: '0.5em', marginTop: '0.2em' }}
                        >
                            <p className="dropdown-item"><i className="bi bi-person"></i> Username:<strong style={{ marginLeft: "5px" }}>{userData.username}</strong></p>
                            <p className="dropdown-item"><i className="bi bi-envelope"></i>Email: <strong style={{ marginLeft: "5px" }}>{userData.email}</strong></p>
                            <div className="dropdown-divider"></div>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
