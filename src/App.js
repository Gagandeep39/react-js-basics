import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// function testButton() {
//   alert("Lol");
// }



function App() {

  // Creating a statehook
  // personState -> Used to access the values
  // setPersonState -> USed to change the values
  const [ personState, setPersonState ] = useState({
      persons: [
        { name: 'Gagan', age: '21' }
      ],
    otherState: 'Lol xD'
  })

  // NOTE: Do not orget the `const` here
  const testButton = () => {
    console.log('Executed Click methd');
    setPersonState({
      persons: [
        { name: 'Gagan', age: '21' }
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue'
  }


  // Will be executed whenever data is entered in text box
  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: event.target.value, age: '21' }
      ]
    })
    console.log('Name change Method executed');
  }

  const [count, setCount] = useState(0);

  return (
    // Method 1 - Standard MEthod, It gets compiled to below method before execution
    // Below code contains a jsx structure i.e it can have only 1 root element which is div element
    <div className='App'>
      <h1>Hi hi</h1>
      <Person name="Gagan" age="21" />
      <Person name="Imagination" age="999" change={nameChangeHandler} />
      {/* Here we are passing a handler to testButton so it can be accessed from within the component
        also the click here can be any name
      */}
      <Person name="Sadness" age="21" click={testButton}/>
      <Person> Test fetching data between element tags </Person>
      <button style={style}
      onClick={ testButton }>Click Me :D</button>
      <br/>
      <button onClick={ ()=> {setCount(count+1)} }> Counter: {count} </button>
    </div>

    // Method 2 - Old method
    // React.createElement('div', null, 'Hi hi')

    // Method 3 - Creating Nested element
    // React.createElement('div', null, React.createElement('h1', null, 'Hihi'))
  );
}

export default App;
