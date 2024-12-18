### Exploring the World:

Discussed on Monolith and Micorservice Architecture:

Using react we follow below approach:

Page Loads -> Renders UI -> Calls API to fetch the data to display -> Re-Render again

- React Renders cycles are very fast. No need to bother much about how many times we are rendering

## Hook:

It is nothing but a normal JS function. Which is provided by react.

## UseEffect Hook:

Its a react library. It is called like a function. It has two arguments, first one is a call back function, second one is dependency array.
When is this useEffect call back function is called, It is called when the component renders.

## Cors Policy:

Our browsers does not allow swiggy API from Local host. Means it does not allow other API from the localhost

## Shimmer UI:

Resembles the page like actual UI, so users will understand how quickly the page is loaded.

## Why do we need usestate than normal JS variable?

useState is named import from react.
syntax: const [btnName, setbtnName] = useState("login") // it is a default value
1st paramenter above is the variable, the second parameter is the function to set the variable.
Whenever the state variable changes then the react will re-render this component.

For example if a state variable changes in a specific component then the complete component re-renders on the screen.
Refer login button in the header component.

->

## To implement search bar:

-> When ever a state variable updates, then react triggers reconciliation cycle or re-renders the component.
