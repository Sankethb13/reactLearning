import React from 'react';
import ReactDOM from 'react-dom/client';

// First we need to create react element
// what does react.createelement do: It creates an object, when we renders it on dom. Then it becomes html element
const heading = React.createElement('h1', { id: 'heading' }, 'Be serious');
console.log(heading);

// JSX
// const jsxheading = (
//   <h1 className="heading" tabIndex={'5'}>
//     We are using the JSX code in the element.
//   </h1>
// );

// react functional component
const HeadingCompponent = () => {
  return <h1> React based functional component</h1>;
};

console.log(HeadingCompponent);
//to create root
const root = ReactDOM.createRoot(document.getElementById('root'));

// when we do root. render the library reactdom takes this element and renders on the screen. It will replace the root in the html file.
root.render(<HeadingCompponent />);
