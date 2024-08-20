/**
*
Nested  need to create a div inside a div and element link in the child div
<div> 
  <div>
    <h1> I am a nested div </h1>
    <h2> I am a nested div </h2>
  </div>
</div>
*/

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am a nested element'),
    React.createElement('h2', {}, 'I am the second  nested element'),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
