import './App.css'; // Make sure to import your CSS file

import React, { useState } from 'react';

const LoginPage = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [theme, setTheme] = useState('light');
    const [color, setColor] = useState('#ffffff');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username === 'John Doe' && user.password === 'johndoe@123') {
            console.log('Login Successful');
        } else {
            setError('Invalid username or password');
        }
    };

    // Apply the theme and color to the container style
    const containerStyle = {
        backgroundColor: theme === 'dark' ? '#333' : color,
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '20px',
        borderRadius: '8px',
    };
        

   


    return (
        <div style={containerStyle} className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>

            {/* Theme selection */}
            <select onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <input
                type="color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
            />
           

        </div>
    );
};

export default LoginPage;


