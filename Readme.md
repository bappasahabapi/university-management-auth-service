## Branches:

| Branch Name                                   | description         |
| --------------------------------------------- | ------------------- |
| UM-3 👍 Project SetupProject Setup            | basic project setup |
| UM-4 👍 Setup express,mongoose,cors,parser    | ---                 |
| UM-5 👍Setup Eslint,Prettier,Husky,Lint stage | ---                 |
| UM-5 👍Setup Eslint,Prettier,Husky,Lint stage | ---                 |
| UM-6 👍Create User Interface and Models       | ---                 |
| UM-7 👍Create user service                    | ---                 |

| Branch Name               | description |
| ------------------------- | ----------- |
| UM-8 🦜 eslint customized | ---         |

| Branch Name                                    | description |
| ---------------------------------------------- | ----------- |
| UM-9 🔏 set up basic logger                    | ---         |
| UM-9.1 🔏 separate success logs and error logs | ---         |
| UM-9.2 🔏 customized logs                      | ---         |
| UM-10 🔏 manage log using library              | ---         |
| UM-11 🔏 Error handling basic                  | ---         |

| Branch Name                                  | description |
| -------------------------------------------- | ----------- |
| UM-11 🪲 Error handling basic                | ---         |
| UM-11.1 🪲 error handle                      | ---         |
| UM-11.2 🪲 Optimize error handling           | ---         |
| UM-11.3 🪲 Common Error Pattern for frontend | ---         |
| UM-11.4 🪲 handleValidation ErrorHandler     | ---         |
| UM-11.6 🪲 zod error handling                | ---         |

| Branch Name                                         | description |
| --------------------------------------------------- | ----------- |
| 🐞 UM-12-AcademicSemester                           | ---         |
| 🐞 UM-12.1-AS-interface-model                       | ---         |
| 🐞 UM-12.2-validation-improved-interface-schema     | ---         |
| 🐞 UM-12.3-Create-AS-Constant-file                  | ---         |
| 🐞 UM-12.4-create-semester-service-controller-route | ---         |
| 🐞 UM-12.5-Post-semester-working                    | ---         |
| 🐞 UM-12.5-handle-same-year-same-semester-error     | ---         |
| 🐞 UM-12.6-semester-code-validation                 | ---         |
| 🐞 UM-12.7-optimize-route-and-controller            | ---         |
| 🐞 UM-12.8-catchAsync                               | ---         |
| 🐞 UM-12.9-final                                    | ---         |
| 🐞 UM-13-done                                       | ---         |

| Branch Name                                    | description |
| ---------------------------------------------- | ----------- |
| 👨‍🏫 UM-14.0                                     | ---         |
| 👨‍🏫 UM-14.1-handle-not-found-rote               | ---         |
| 👨‍🏫 UM-14.2-pagination                          | ---         |
| 👨‍🏫 UM-14.3-pagination-and-pick                 | ---         |
| 👨‍🏫 UM-14.3-pagination-implementing             | ---         |
| 👨‍🏫 UM-14.4-pagination-implementing             | ---         |
| 👨‍🏫 UM-14.5-dynamic-pagination                  | ---         |
| 👨‍🏫 UM-14.6-filtering-searching                 | ---         |
| 👨‍🏫 UM-14.7-dynamic-searching                   | ---         |
| 👨‍🏫 UM-14.8-done-searching-filtering-pagination | ---         |
| 👨‍🏫 UM-14.9-create-single-semester              | ---         |
| 👨‍🏫 UM-14.9-get-single-semester-by-id           | ---         |


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

