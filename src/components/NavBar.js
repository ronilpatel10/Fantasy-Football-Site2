// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/loser-summary">Weekly Loser's Summary</Link></li>
                <li><Link to="/past-winners">Past Winners</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
