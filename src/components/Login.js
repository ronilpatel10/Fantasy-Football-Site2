// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ setLoggedIn }) => {
    const [password, setPassword] = useState('');
    const correctPassword = 'shiva';

    const handleLogin = () => {
        if (password === correctPassword) {
            setLoggedIn(true);
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
