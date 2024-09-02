# Real world Application:

# Plan to build an Application:

- UI layout/Design
  Header Logo, Navigation items
  Body search, RestaurantContainer -> Restaurant card
  Footer Copyright, links address and others
- Components in the app

=> <ul> <li> tags in html are used to creates an unordered (bulleted) list.

## Props:

Properties - props are normal arguments to the functions.
If we want to dynamiclly change the text/any properties of the component or any element we can use props.
passing an argument to function is equal to passing an props to the component

## Config-driven UI:

A website which is driven by config based on location/offers or any other configs this is called config-driven ui

# Index for the Keys for each component:

We should use a unique ID for the each component.(Means each <RestaurantCard key={restaurant.info.id} resData={restaurant} /> should have a uniqueID). If we do not have a unique ID then react should render all the components again from the first component.
We should not use index as an ID. We need to use the ID coming from the server or the backend.
