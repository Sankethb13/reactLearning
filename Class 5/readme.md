## Let's get Hooked:

### Discussed about Folder structure.
Create a src folder to stucture the business logic files.
Create components to all the individual components in app.js file to make it reusable.
For each component file we need to export the respective component.
Then we can import the same component in the required class.
Two type of export 
 - Default export: When we want to export only one component/enum. Export default component at the end of the file. 
 - Multiple export: When we want to export multiple components/enums.export directly near the enum or constant.

### Hooks:
They are normal JS functions. Maintained by FaceBook developers. This Source is added in normal utility functions.
They are two hooks
- useState() :  Super powerful react variables in react - it is used to create state variable - it maintains state of the class
- useEffect()

Whenever a state variable updates, react re-renders the component.

React algorithm: Re-conciliation algorithm - It is also known as react fiber. 
Diff Algorithm: IT finds out the difference between updated virtual DOM and Actual Virtual DOM.
In react 16 a new algorithm came out, This is known as React fiber. It is new way finding div and updating the DOM.
When ever there is a change in state variable, react will find the difference btwn the DOM's and it will update the DOM.
Reference: React fiber architecture in GIT

React is fast because, it has efficient DOM manipulation. Beacuse it has virtual DOM.


For suppose a restaurant container has multiple cards(7). We need to filter it to 3 cards.
Virtual DOM: It is representation of an Actual DOM. It is normal JS object.
Actual DOM are tags like header, div, and manu other