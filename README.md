# minimal-webpack-boilerplate
It is a very simple webpack configuration for general web development. It offer out-of-box:
- ES6 even for ancient Browsers (thanks to BABEL)
- SASS or CSS depend on what you prefer. Development builds have CSS inline, for Production CSS is in separate file
- automatic compression for images. Small images (less than 8kB) are converted to inline to reduce requests
- hot module replacement using webpack-dev-server
- tree shaking / dead-code elimination
- caching with user-friendly '[name].[hash].' names
- Service Workers - Progressive Web Application

## Requirements
You need node.js, npm and webpack to use this boilerplate.
I used `node 10.13.0`, `npm 6.4.1` and `webpack 4.26.1`. To avoid problems please be sure you have them up-to-date.  
[Node.js](https://nodejs.org) (npm is distributed with Node.js)  
[Webpack](https://webpack.js.org/)  

## Installation

1. Clone this repository in directory you choose  
```git clone https://github.com/FranzWinter/minimal-webpack-boilerplate.git```
2. Change working directory into one created by git  
```cd minimal-webpack-boilerplate```
3. Install all modules and dependencies using npm  
```npm install```

## Usage
All source files are organized in `src` folder
```
.
├──src
│  ├──favicons          # favicons handled automatically by favicons.js in js_modules
│  ├──img               # images
│  ├──js_modules        # js files
│  ├──style             # css or scss styles depend on your choice
│  ├──template          # html template/templates
│  ├──index.js          # main js file
```

#### Development
To run development server (handled by webpack-dev-server) on `localhost:8080`  
```npm run start```

#### Development without server
To create development build in `dist` folder without running server  
```npm run build-dev```

#### Production
To create production build - with separate css file, minified and optimized to work offline (Progressive Web App) in `dist` folder  
```npm run build```

## Packages used
