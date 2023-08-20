## Still working now fix the jwt

## Branches:

**👥 User:**

| Branch Name                                   | description         |
| --------------------------------------------- | ------------------- |
| UM-3 👍 Project SetupProject Setup            | basic project setup |
| UM-4 👍 Setup express,mongoose,cors,parser    | ---                 |
| UM-5 👍Setup Eslint,Prettier,Husky,Lint stage | ---                 |
| UM-5 👍Setup Eslint,Prettier,Husky,Lint stage | ---                 |
| UM-6 👍Create User Interface and Models       | ---                 |
| UM-7 👍Create user service                    | ---                 |
| UM-8 🦜 eslint customized |      ---  |


**🪵  Logger-Setup**

| Branch Name                                    | description |
| ---------------------------------------------- | ----------- |
| UM-9 🔏 set up basic logger                    | ---         |
| UM-9.1 🔏 separate success logs and error logs | ---         |
| UM-9.2 🔏 customized logs                      | ---         |
| UM-10 🔏 manage log using library              | ---         |

**📦  Error-Handling +ZOD setup**

| Branch Name                                  | description |
| -------------------------------------------- | ----------- |
| UM-11 🪲 Error handling basic                | ---         |
| UM-11.1 🪲 error handle                      | ---         |
| UM-11.2 🪲 Optimize error handling           | ---         |
| UM-11.3 🪲 Common Error Pattern for frontend | ---         |
| UM-11.4 🪲 handleValidation ErrorHandler     | ---         |
| UM-11.6 🪲 zod error handling                | ---         |

**🏫  Academic Semester**

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

**📖Pagination + 🔎Filtering**

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
| 👨‍🏫 UM-14.10-handle-cast-error          | ---         |
| 👨‍🏫  UM-14.11-update-semester-operation        | ---         |
| 👨‍🏫  UM-14.12-implement-validatio-on-update        | ---         |
| 👨‍🏫  UM-14.13-handle-can-not-set-header-problem        | ---         |
| 👨‍🏫  UM-14.14-delete-operation        | ---         |


**🕍 Academic Faculty**

| Branch Name                                    | description |
| ---------------------------------------------- | ----------- |
| 🔔 UM-15.0-Academic-Faculty   | ---         |
| 🔔 UM-15.0-Academic-Faculty-create-vallidation-zod   | ---         |
| 🔔 UM-15.1-Academic-Faculty-create-vallidation-zod   | ---         |
| 🔔 UM-15.2-Academic-Faculty-get-routes   | ---         |
| 🔔 UM-15.3-Academic-Faculty-get-single-data   | ---         |
| 🔔 UM-15.4-Academic-Faculty-update   | ---         |
| 🔔 UM-15.5-Academic-Faculty-delete   | ---         |
| 🔔 UM-15.6-Academic-Faculty-finished   | ---         |


**🤺 Academic Department**

| Branch Name                                    | description |
| ---------------------------------------------- | ----------- |
| 🏁  UM-16.0-Academic-Department                                 | ---         
| 🏁  UM-16.1-Academic-Department-Create                                  | ---         |



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

