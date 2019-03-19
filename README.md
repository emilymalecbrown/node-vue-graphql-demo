### GraphQL Intro!

### Project Setup / Helpful Commands

#### Install dependencies and seed local db
```bash
yarn setup
```

#### Start local client + dev server
```bash
yarn start
```

#### Documentation
These are docs for the primary tools used to build this demo / playground

#### Server
- [Nodemon](https://nodemon.io/) : Runs node with hot reloading
- [Express](https://expressjs.com/en/4x/api.html) : Wonderful server and routing framework
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) : Allows us to field incoming GraphQL requests
- [LowDB](https://github.com/typicode/lowdb) : A super simple local JSON store, with ORM like interactions provided by lodash

#### Client
- [Vue](https://vuejs.org/v2/api/) : Our favorite front end framework
- [Vuex](https://vuex.vuejs.org/api/) : State management for Vue
- [GraphQL Tag](https://github.com/apollographql/graphql-tag) : Used to build GraphQL tags from string literals
- [Apollo Client](https://www.apollographql.com/docs/react/) : Provides tools for connection to GraphQL


*These docs are "for React" but remain pretty agnostic to the library.

### Process Management
- [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme) : This tool makes running the client and server in parallel easier by enabling us to run one yarn command to spin up both processes!
