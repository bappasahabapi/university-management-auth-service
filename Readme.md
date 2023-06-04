
-    UM-11 🔏 Error handling basic
---
-    UM-10 🔏 manage log using library
-    UM-9.2 🔏 customized logs | custom log format
-    UM-9.1 🔏 seperate success logs and error logs
-    UM-9 🔏 set up basic logger
---
-    UM-8 🦜 eslint customized

---
- UM-3 👍Project Setup
- UM-4 👍Setup express,mongoose,cors,parser
- UM-5 👍Setup Eslint,Prettier,Husky,Lint stage
- UM-6 👍Create User Interface and Models
- UM-7 👍Create user service

**switch branch**

`git checkout UM-3
`
**Step:1**

 `  yarn add typescript --dev`
  ` yarn add express mongoose`
  ` npm init`

**Next we configure the typescript file. so we need a ts config file.**

` tsc --init`

in the tsconfig.json file enalble the ./src and ./dist in source and ouotdir.

`yarn add dotenv`

---

`yarn add -D @types/express`

To run the file go to `ts-node-dev` documentation

`yarn add ts-node-dev --dev`
`yarn add cors`

Then add this to the package.json script file

    ts-node-dev --respawn --transpile-only server.ts

```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "ts-node-dev --respawn --transpile-only src/server.ts"
  },
```

run 👍

    yarn start

