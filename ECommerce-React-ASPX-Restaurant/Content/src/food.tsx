﻿/*
 * to get react intellisense in VS express 2017
 * first install node globally
 * then locally (CMD prompt in project folder)
 * install typescript, then webpack to generate a 
 * bundle.js for this project
 * put webpack.config.js in Project root
 * put tsconfig.json        in Project root
 * then install react type definitions
 * then install react tsx loader
 * then install and link typescript
 * dont forget to exclude React files from project, like this food.tsx (right click in solution explorer->exclude)
 * everytime you make change to pure react or tsx file
 *              you need to transpile AGAIN with 'webpack' on CMD
 *             to recreate/update bundle.js file
 *   to transpile again from cmd in same dir as this project: npm install --save typescript
 *   then run 'webpack'
 *   Or run the transpile.bat batch file distributed with this code.
 *   
 *   BTW Clean And Rebuild will not save you, You must delete the .suo file if any .dll not found messages appear after running webpack
 *   https://stackoverflow.com/questions/1421862/metadata-file-dll-could-not-be-found
 *   Big $$$ for whoever makes using React with MVC .NET in VS easier, but the new Blasor may make that task obsolete...
 * */

import * as React from "react";

import * as ReactDOM from "react-dom";

import {MenuBox} from "./MenuBox";


ReactDOM.render(
    <div>
        <h2>MenuBox</h2>
        <MenuBox />
    </div>,
    document.getElementById("foodorder")
);


// Example command lines to get react intellisense working
/*
 * //--------------command line--- 
npm install -g webpack  

npm install --save typescript

//add webpack.config.js

//add tsconfig.json

// check typescirpt version
tsc -v

// install react type definitions with nuget
npm install --save react @types/react 
npm install --save react-dom @types/react-dom

// install loader used in tsconfig
npm install --save typescript awesome-typescript-loader source-map-loader 



//Run this to create package.json
npm init
 
//now check intellisense 
//run below command if intellisense not working
typings install dt~react dt~react-dom -–save

npm install   
npm link typescript  

npm install --save typescript 


//---webpack.config.js---------------------

module.exports = {
    entry: "./Content/src/food.tsx",
    mode: "development",
    output: {
        filename: "bundle.js"
    }, 
    resolve: {
        extensions: [ '.ts', '.js', '.tsx', '.jsx']
    },
 
    devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        rules: [
		  {
		      test: /\.tsx?$/,
		      loader: 'awesome-typescript-loader'
		  }
        ]
    }
};


//------------tsconfigs --------------
//  remove the $$$ symbols
{
	"compilerOptions": {
		"target": "es6",
		"module": "commonjs",
		"moduleResolution": "node",
		"noResolve": false,
		"noImplicitAny": false,
		"removeComments": true,
		"sourceMap": true,
		"allowJs": false, 
		"jsx": "react"
	},
	"include": [ "./Content/src/**$$$/* " ],
"exclude": [
    "./plugins/**$$$/*",
    "./typings/**$$$/*",
    "./built/**$$$/*",
    "node_modules",
    "wwwroot",
    "Scripts/*"

]
}

 * */