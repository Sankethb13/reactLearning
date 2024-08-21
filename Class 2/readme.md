- Class 2:
  --- Installing the dependencies and the requried packages from the scratch to create the react app
  #===============================================================================#
- npm -> manages the node packages, standard repo for all the packages. To include any package in the repo/code we use npm
  #===============================================================================#
- Created a package.json - npm init command - it is a configuration for npm - keeps the track of particular version is installed - keeps the approx verion
  #===============================================================================#
- bundler -> whole code compressed and cleaned before it is send to production -> webpack -> parcel -> veet - these are bundler - it packages your app to ship to production.
- create react app used web pack and babel
- We are going to use parcel -> why -> all bundlers are same -> alogrithm are different but the goal is same
  #===============================================================================#
- installing parcel as the bundler - npm install -D parcel - '-D' is a dev dependency
  -> two dependencies in the app

1. dev dependency - it is requried in development phase
2. normal dependency - it is used in normal dependency
   #===============================================================================#
   ~ and ^ different in package.json:
   ~ will install the major update of the particular package.
   ^ will install the every minor update of that particular package.
   #===============================================================================#
   package-lock.json - it keeps the track of the exact version - 'intergrity field in the file' it is the hash to keep the track of local and production setup
   #===============================================================================#
   - node_modules: fetching all the code of parcel while installing the parcel. It is the actual code of the particular package. It is like a data base. Dependency of the package - transetive dependency - dependencies for all the packages in the node modules.
     #===============================================================================#

- How to create your own react app?
  -> Building our using parcel.
  -> igniting our app using - npx parcel index.html - it creates a server rather than the local directory - 'npx': it is similar to npm but it executing the package.
  -> npm installs the package - npx executes the package like parcel.
  -> one way to create the react app is to add the scripts in the code from CDN documention. - This is not the preffered way to do - Because it is costly process - it makes a network call to CDN - We need to keep changing the packages in the script code.
  -> using npm and npx is the other way to create a react app.
  -> install react - npm install react
  -> install react-dom - npm install react-dom
  -> import react and react-dom in the javascript file.
  -> parcel hosts your app to server, it gives dev build/ local server and refreshes the page automatically when we save the file.
  -> Parcel gives HMR -> hot module replacement - it uses file watch algorithm - which is return in c++ - it keeps an eye on all the files. parcel keeps track of it and build it once again - it caches things - to give faster development experience - it cache's in the parcel-cache folder to build faster - if we delete cache folder and re build again it take more time than normal - when cache is created the build time is reduced - it also does image optimization - bundle all the files - compress the file - consistent hashing ?? - code splitting - differential bundling -> it takes care and supports different browsers and devices - it gives you error suggestions and diagnostics - host app on https -// parceljs.org website //- tree shaking algorithm -> it will remove unused code.
  -> how to create a prod build - npx parcel build index.html (we should give the starting file in the package.json or remove it there) - when the build is created the parcel creates a dist folder it will compress all the files and place it in the dist folder - there are three main files in the dist map, index.html and js file
  -> to support specific browser list - if we need to add a browserlist array in package.json - it is a node-module and package
  browserlist: {
  "last two chrome versions",
  "last two firefox versions",
  }
