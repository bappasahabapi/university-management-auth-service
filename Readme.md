##    pagination


-    **api:** `/api/v1/something?page=0&limit=10`

**page:** Number(req.query.page)

**limit:** Number(req.query.limit)

**example:**
-    1-10 of 80 documents => query{page: '`1`', : limit: '`10`'} skip =0 || for page 0
-    11-20 of 80 documents => query{page: '`2`', : limit: '`10`'} skip =1-10 || for page 1
-    1-10 of 80 documents => query{page: '`3`', : limit: '`10`'} skip =1-30 || for page 2

**So the formula:** `skip=(page-1)*limit`

`/api/v1/something?page=1&limit=01&sortBy=year&sortOrder=desc`
```javascript
const paginationOption={
    page:Number(req.query.page),
    limit:Number(req.query.limit),
    sortBy:req.query.sortBy,
    sortOrder:req.query.sortOrder
}
```


##    Branches

-    UM-12.1 📆 pagination
-    UM-12 🔏 not found route handle
- 

---
-    UM-11.6 🔏 zod error handling
-    UM-11.5 🔏 error handle final
-    UM-11.4 🔏 handleValidation ErrorHandler
-    UM-11.3 🔏 Common Error Pattern for frontend
-    UM-11.2 🔏 Optimize error handling
-    UM-11.1 🔏 error handle 
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

`git checkout UM-3`

### UM-6 👍Create User Interface and Modules

[visit this doc](https://mongoosejs.com/docs/typescript.html)

**Create:**

make `interface` -> `sechema` --> `model`-->`service`-->`controller`-->`route`

  users.interface.ts
  users.model.ts
  user.service.ts
  user.utils.ts
  user.controller.ts




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

`yarn add --dev ts-node-dev`
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
    
---
[Read this blog step by step](https://blog.logrocket.com/linting-typescript-eslint-prettier/)

**Install ESLint:**
`npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`
`yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`


**Install Prettier**
yarn add -D prettier

npm install --save-dev eslint-config-prettier

**Install Husky**

`yarn add husky --dev`

`yarn husky install`

`yarn husky add .husky/pre-commit "npm test"`

`yarn add -D lint-staged`

---
### UM-6 👍Create User Interface and Modules

[visit this doc](https://mongoosejs.com/docs/typescript.html)

Create:

make `interface` -> `sechema` --> `model`-->`service`-->`controller`-->`route`

  users.interface.ts
  users.model.ts
  user.service.ts
