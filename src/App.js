import './App.css';

import React, { useContext, useEffect } from 'react';
import { ThemeContext, ThemeProvider } from './Components/Task4/ThemeContext';

import LifecycleComponent from './Components/Task2';
import NameList from './Components/Task1';
import RegistrationForm from './Components/Task3';
import SampleComponent from './Components/SampleComponent';
import ThemeToggle from './Components/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  );
};

const InnerApp = () => {
  const names = ['Pavani', 'Janu', 'Manu', 'Sai'];
  const { theme } = useContext(ThemeContext); 

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <div className="app-container">
      <h1 className="header">React + JavaScript Assessment Questions:</h1>
      <ThemeToggle />
      <div className="component-container">
        <div className="component name-list">
          <h2>Name List</h2>
          <NameList names={names} />
        </div>
        <div className="component lifecycle-component">
          <h2>Lifecycle Component</h2>
          <LifecycleComponent />
        </div>
        <div className="component registration-form">
          <h2>Registration Form</h2>
          <RegistrationForm />
        </div>
        <div className="app-container">
      <h1>Higher Order Component </h1>
      <SampleComponent message="This is a message from the HOC" />
    </div>
   
  
      </div>
      </div>
    
  );
};

export default App;
