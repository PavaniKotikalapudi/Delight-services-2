// src/components/ThemeToggle.js

import React, { useContext } from 'react';

import { ThemeContext } from './Task4/ThemeContext';

// Ensure this import is correct

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use context here

  if (!theme) {
    return null; // Prevent rendering if theme is undefined
  }

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggle;
