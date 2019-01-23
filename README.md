# minimal-webpack-boilerplate



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
