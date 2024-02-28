import React from 'react';
import ReactDOM from 'react-dom';


// const heading = document.createElement('h1');
// heading.innerHTML = 'Hi I am Sounik2';

const Heading = () => React.createElement('h1', {id: 'h1-id'}, 'this is normal h1')
const Heading1 = () => { 
    return (
    <>
    <Heading/>
    <h1 id="h1-id-2">Hi I am Sounik1</h1>
    </>
    );
}
// const heading = <h1 id="h1-id-2">Hi I am Sounik</h1>
const rootElement = document.getElementById('root');

// ReactDOM.render(heading, rootElement)
ReactDOM.render(<Heading1/>, rootElement)