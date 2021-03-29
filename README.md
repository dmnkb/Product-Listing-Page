# Product Listing Page
 
## Requirements

- responsiveness
- hover functionality on a product providing additional information like color variations etc.
- a simple filter functionality (e.g. after brand, color and size)
- a product comparison overlay
- make use of a frameworks like reactJS, svelteJS …
- you can use design components like Material UI, react Bootstrap …
- at least 1 unit test
- readme

---

## Stack

#### Framework
- [React](https://reactjs.org/) via [Create React App](https://github.com/facebook/create-react-app)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://www.npmjs.com/package/axios)
- State management: [React Context API](https://reactjs.org/docs/context.html)

#### Design System / Styling
- [Matierla UI](https://material-ui.com/)
- [styled components](https://styled-components.com/)
- [polished](https://polished.js.org/docs/)
- [Sass / SCSS](https://sass-lang.com/)

#### Grid
Material UI comes with it's own grid. However, in order to increase flexibility and to be more concrete in terms of breakpoints, I generate breakpoint classes generically that fit my needs.
- [mdc-layout-grid](https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid)
- [include-media](https://github.com/eduardoboucas/include-media)

---

## API

With kind consent of [TG4 Solutions](https://tg4.solutions/) this project consumes their [sneaker database API](https://thesneakerdatabase.com/api).
The app is preconfigured to search specifically for Nike Airforce 1 sneakers. The app leverages the API features of filtering by gender and release year. One thing to note here is that unfortunately it doesn't come with color variants. Therefore I decided to fake those by generating random ones.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

