// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/NavBar';
import Home from './components/Home';
import WeeklyLoserSummary from './components/WeeklyLoserSummary';
import PastWinners from './components/PastWinners';
import './components/styles.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
            {loggedIn ? (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/loser-summary" element={<WeeklyLoserSummary />} />
                        <Route path="/past-winners" element={<PastWinners />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            )}
        </Router>
    );
};

export default App;
