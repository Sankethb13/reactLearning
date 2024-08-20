const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'Sanketh' },
  'Hello world from react!'
); // we need to create the element in the react.
console.log(heading); // h1 will be a obj
// second parameter is the attributes.
const root = ReactDOM.createRoot(document.getElementById('root')); // all the elements will be rendered in the root, rendered the element in the root
root.render(heading); // this is putting the elemnt or header inside the root
