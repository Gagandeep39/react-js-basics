import React from "react";
// ES6 style 
// Props is the tecnical ketword for the attribute of an element
// Here we can hoever give anyname
const person = (props) => {
    return (
        <div>
            <hr/>
            <p> I'm a Person!</p>
            <p> Name provided as attribute: {props.name}, age: {props.age}</p>
            <p>Age { Math.floor(Math.random() * 100) }</p>
            <p> {props.children} </p>
            <button onClick={props.click} >Sadness Button Handle</button>

            {/* Will be executed whever someinput is etered in Sadnes textbox */}
            <input type="text" onChange={props.change} value={props.change}></input>
        </div>
    )
};

export default person;
// Older method
// const person = function (){}
