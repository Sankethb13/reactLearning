## Finding the Path:

### Two Hooks:

- useEffect()
- useState()

### useEffect:

- Two arguments (Call backfunction and dependency) - When is the useEffect is called ? - It is called after every component renders. It is called everytime when the component renders. This dependency array changes the behaviour of its render.
  example:
  useEffect(() => {
  console.log("useEffect called");
  }, [ ])
- If we dont put any dependency array, then it will render everytime the component renders. it is not mandatory in useEffect.
- What if there is empty dependency array - [] - Then useEffect is called on only initial render and just once.
- If there is any dependency in the array, the useEffect will be called when the dependency changes. [btnNameReact] When btnNameReact is updated the useEffect is called.

### useState:

- Never use/create useState outside of the component/Body of the function component. Always call in the functional component. Try to call it in the top. To avoid inconsistency.
- Never create useState inside the if/else (Condition), inside for loop, inside function.
- Example:
  const [searchText, setSearchText] = useState("")

### Routing of our React Application:

- For routing we are using reactrouter DOM. It is on version 6. How to install npm package in our code. (npm i react-router-dom)
- createBrowserRouter it will provide the configuration for routing, it is imported from react-router-dom.
- Page - composition of component.
- configuration is list, which is array of object. It contains elements like path and element.
  example:
  {
  path: '/',
  element: <AppLayout />,
  },
  {
  path: '/about',
  element: <About />,
  },
- routerProvider, createBrowserRouter are configuration from react-router-dom, provides router configuration to our app.
- createBrowserRouter, recomended router for all react web projects.

### if we use rafce then a basic component is created
