# Using Typescript and Compiler Options

## Install and Run

- install [Node JS](https://nodejs.org/en/).
- install typescript globally `npm install typescript -g`.
- Run `tsc myTSFile.ts`. It will create a JS file named *myTSFile.js*. Argument `--watch` or `-w` allows to recompile automatically with live reload.

## Init a project with Typescript

Run `tsc --init` to initialize a project with Typescript. It will create a *tsconfig.json* file. When we run `tsc`, it will compile all TS files inside the folder and we don't have to point a specific file for it. The watch argument works as well: `tsc -w`.

## Include / Exclude files

`"exclude": []` can be added right after the *compilerOptions* object. This is an array where we can specify patterns like:
- path to files, ex: `myFile.ts`.
- any file with patternm, ex: `*.dev.ts`.
- any files inside any folder, ex: `**/*.ts`.

> We can specify to exclude the *node_modules* folder, but this is the case by default. We only have to add it if we specify the exclude config.

`"include": []` do the opposite, it will include files. We can use the same patterns.

`"files": []` is a bit the same as include. The thing is we cannot specify folders in the patterns.

## Compiler Options

### target

Type string - Allows to specify in what version of JS we want the code to be compiled: es5, es6, es2016, ...

### lib

Type array - If not set, some defaults are assumed. They are based on the JS version we use, and all features that we need to run JS in a browser like the *dom* library. 
 
 If set we need to specify the dependencies (those are the defaults) :
 ```
"lib": [
    "dom",
    "es2015",
    "dom.iterable",
    "scripthost"
]
 ```

 ### allowJs

Type boolean - Allow Javascript files to be compiled.

### checkJS

Type boolean - Check syntax of javascript files.

### sourceMap

Type boolean - Generate .map files to allow debugging in typescript files in the browser console. Useful sourceMap options : 
```
"sourceRoot": "",
"mapRoot": "",
"inlineSourceMap": true,
"inlineSources": true,
```

### outDir & rootDir

Type string - Specify the ouput directory and the root directory. Typically in a Typescript project, the outDir value will be `"outDir: "./dist"`, and the root dir will be: `"rootDir: "./src"`.

### removeComments

Type boolean - emove comments in compiled JS files. Good to minimize the size of files.

### downLevelIteration

Type boolean - Can be turned on if, with older versions of JS, the loop are not correctly generated. It will generate more verbose code so the xise of files will increase.

### noEmit

Type boolean - Don't generate JS files. Useful only in the case if we only want to check our TS files.

### noEmitOnError

Type boolean - Don't generate JS files if we have an error in TS files. It's good practice to set this to true because we want JS files errors free.

### strict

Type boolean - If set to true, it will set all those options to true instead to set them separately:
```
"noImplicitAny": true,
"strictNullChecks": true,
"strictFunctionTypes": true,
"strictBindCallApply": true,
"strictPropertyInitialization": true,
"noImplicitThis": true,
"useUnknownInCatchVariables": true,
"alwaysStrict": true,
```

### noImplicitAny

Type boolean - If set to true, it will block compilation if function arguments are not typed. Ok for variable though, Typescript can infer the type with the initialization.

### strictNullChecks

Type boolean - If set to true, it will block compilation for potential null value like `const button = document.querySelector('button)`. Not a good practice to deactivate it but instead solve the error with `!` or a if check.

### strictBindCallApply

Type boolean - If set to true, it will check if bind call and apply have all the arguments necessary and they are the good type.

### noUnusedLocals & noUnusedParameters

Type boolean - Check if they are unused variables or parameters.

### noImplicitReturns

Type boolean - Check if all cases return a value in a function. Typically a return in a if check but not by default.

### noImplicitThis

Type boolean - Check the this keyword and if they are not clear which value they refer to.