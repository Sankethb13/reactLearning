Laying foundation for React.js:

# To start an application we need to run:

npx parcel index.html

# How to create a script:

Command to build the app in the development and production -
We will add it in the package.json file under scripts tag. We need to add respective script to start or build the application

# New project:

- basics:
  // First we need to create react element
  // what does react.createelement do: It creates an object, when we renders it on dom. Then it becomes html element
  const heading = React.createElement('h1', { id: 'heading' }, 'Be serious');
  console.log(heading);

  //to create root
  const root = ReactDOM.createRoot(document.getElementById('root'));

  // when we do root. render the library reactdom takes this element and renders on the screen. It will replace the root in the html file.
  root.render(heading);

- As above is looks clumsy, difficult to understand and maintain the code the react developers introduced 'JSX'.
  'JSX': It is a Javascript syntax. This is not part of react, it is different to react. We can write react without JSX. But it makes life easy for the users. JSX is convention to merge the html and JS together. It is not html in javascript. Everything is different but html like syntax.

- ES6 - Pure JS - ecma script 6 - javascript engine does not understand the JSX code which were written in XML/html form. Parcel helps to understand the engine and process the code - the JSX code transpiles the code using parcel and executes in the browser(JS Engine)
- Transpile - Code is converted such that browser can understand. Parcel is manager to transpiles the JSX code - Babel helps to converts the JSX code, such that react and browser engine understand.
- Babel is the JS compiler.
- JSX => converts to react.createElement => it creates an object and uses babel library to convert as object.
  Assignment:
  How to add the tag, image src to tag in JSX.
- # If you add JSX code in multiple lines we have wrap it in paranthesis () to understand from where it starts and it ends.
- Extensions:
  Priettier to beautify code
  Bracket pair colorizor
  ESLint
  Better comments

- React component:
  What is a component? - Everything in a webpage is a component in react. All the field in the page is a component.
  Two Types:
- Class based component: Old way of writing the code - uses class in JS
- Functional based component: New way of writing the code - uses JS functions
  React functional component - It is a normal JS function for example it is arrow function - it returns a JSX element/bunch of react element.
  ex: component name should start with capital
  const HeadingComponent = () => {
  return <h1> Namaste react functional component </h1>
  }
  TO render the functional component is root.render(<HeadingComponent />)
  Component composition: Mixture of two or more components in a functional components

=> In JSX, if you write {} we can run any JS code in this expression. We can inject any JS code in the {} in JSX

JSX -> prevents cross site information - It sanitizes the data and runs properly.
