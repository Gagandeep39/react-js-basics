import React from "react";
// ES6 stype
const person = () => {
    return (
        <div>
            <p> I'm a Person!</p>
            <p>Age { Math.floor(Math.random() * 100) }</p>
        </div>
    )
};

export default person;
// Older method
// const person = function (){}
