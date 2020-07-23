import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

// function testButton() {
//   alert("Lol");
// }

// Array must be outside the method else after clicking delete, the array will be reeinitialized
let personArray = [
  { name: "cv fbgnhmj", age: 0 },
  { name: "axsdcfvgbhnmj,kl.", age: 1 },
  { name: "sdcfvgbhnjmk,l./;", age: 2 },
  { name: "dfgrhyjkilo;p'", age: 3 },
]

function App() {
  
  

  // Creating a statehook
  // personState -> Used to access the values
  // setPersonState -> USed to change the values
  const [ personState, setPersonState ] = useState({
      persons: [
        { name: "cv fbgnhmj", age: 0 },
        { name: "axsdcfvgbhnmj,kl.", age: 1 },
        { name: "sdcfvgbhnjmk,l./;", age: 2 },
        { name: "dfgrhyjkilo;p'", age: 3 },
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


  const [ usernameState, setUsernameState ] = useState({
    username: 'Superman'
  })

  const usernameChangeHandler = (event) => {
    setUsernameState({
      username: event.target.value
    })
  }

  const [showHideState, setShowHideState] = useState({
    buttonState: false
  })

  const showHideButtonHandler = (event) => {
    console.log('Toggled show hide');
    setShowHideState({
      buttonState: !showHideState.buttonState
    })
  }


  // Added a sdelete button hadler
  const deleteButtonHandler = (personIndex) => {
    // personArray.splice(personIndex, 1);
    // setPersonState({persons: personArray})

    // Ass a good prcatie we must always update the arryain immute manner i.e without changing inital state
    const persons = [...personState.persons];
    persons.splice(personIndex, 1)
    setPersonState({persons: persons})
  }

  return (
    // Method 1 - Standard MEthod, It gets compiled to below method before execution
    // Below code contains a jsx structure i.e it can have only 1 root element which is div element
    <div className='App'>
      <h1>Hi hi</h1>

      <button onClick={showHideButtonHandler}>Show/Hide Persons</button>

      { 

      showHideState.buttonState ==true ?
        <div>
          {/* <Person name="Gagan" age="21" />
          <Person name="Imagination" age="999" change={nameChangeHandler} /> */}
          {/* Here we are passing a handler to testButton so it can be accessed from within the component
            also the click here can be any name
          */}
      
          {/* <Person name="Sadness" age="21" click={testButton}/>
          <Person> Test fetching data between element tags </Person> */}


          {/* Displaying an array of person */}
          {personState.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} deleteButton={() => deleteButtonHandler(index)}/>
          })}
        </div>
      : null
      }
      <button style={style}
      onClick={ testButton }>Click Me :D</button>
      <br/>
      <button onClick={ ()=> {setCount(count+1)} }> Counter: {count} </button>




      {/* Example 2 */}
      <UserInput change={usernameChangeHandler} currentName={usernameState.username}/>
      <UserOutput userName={usernameState.username}/>
      <UserOutput userName={usernameState.username} />
      <UserOutput userName={usernameState.username}/>





    </div>

    // Method 2 - Old method
    // React.createElement('div', null, 'Hi hi')

    // Method 3 - Creating Nested element
    // React.createElement('div', null, React.createElement('h1', null, 'Hihi'))
  );
}

export default App;
