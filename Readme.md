UM-3 👍Project Setup
UM-4 👍Setup express,mongoose,cors,parser

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

