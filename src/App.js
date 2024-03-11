import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Main from './Components/Homecomponenet/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Watchlist from './Components/Homecomponenet/Watchlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home-page" element={<Main />} />
          <Route path="/watchlist/:id" component={Watchlist} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
