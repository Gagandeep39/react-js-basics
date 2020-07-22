import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    // Method 1 - Standard MEthod, It gets compiled to below method before execution
    // Below code contains a jsx structure i.e it can have only 1 root element which is div element
    <div className='App'>
      <h1>Hi hi</h1>
      <Person />
      <Person />
      <Person />
    </div>

    // Method 2 - Old method
    // React.createElement('div', null, 'Hi hi')

    // Method 3 - Creating Nested element
    // React.createElement('div', null, React.createElement('h1', null, 'Hihi'))
  );
}

export default App;
