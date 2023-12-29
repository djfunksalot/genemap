# Getting Started with genemaps

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is designed to display images and associated with a gene name

## Requirements

[nodejs](https://nodejs.org/en) to build and run react components.
[R](https://cran.r-project.org/) along with  r-cran-ggplot2, r-cran-uuid, r-cran-rjson to generate example images and json.

## Available Scripts

In the project directory, you can run:

### `Rscript makeplots.R`

creates example images and json, used to render the images in the browser

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Set the public path by exporting the PUBLIC_URL variable:\

EXPORT PUBLIC_URL=/<path>
