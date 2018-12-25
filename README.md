## CRA TypeScript Boilerplate

This repo contains my personal boilerplate for a create-react-app project. It includes a couple libraries that I prefer to start an app with. Most of these are relatively lightweight, but get the job done 👍.

- `TypeScript` for static typing
- `React Router` for routig
- `Unstated` for state management
- `styled-components` for styling
- `jest` for testing
- `react-testing-library` for testing components

Currently this includes the alpha version of React (16.7 alpha, the version with hooks), so you can use some of the newer features of React like `React.lazy`, `Suspense`, `useState`, `useEffect`, etc...

It is set up with my opinionated folder structure.

- `src/components` for components that may be reused/may not belong in a particular place
- `src/hooks` for reusable hooks (examples pending)
- `src/pages` for page level routes
- `src/state` for Unstated State containers
- `src/utils` for utility files
- `src/GlobalStyles` here is where you may change global level styling
- `src/index` bootstrapping point for the application

I also prefer to colocate test files, so you'll find some examples of tests alongside most of these as well.

Adding other libraries are as easy as npm installing, so adding something like `Apollo` would be relatively simple.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
