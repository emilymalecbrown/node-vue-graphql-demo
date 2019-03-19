## GraphQL Intro and Playground

A project that gives a little intro to GraphQL / Node / Vue end-to-end.

### Project setup and commands

#### Install dependencies and seed local db
```bash
yarn setup
```

#### Start local client + dev server
```bash
yarn start
```

Client server will be running at `localhost:8080`
Express server (GraphQL endpoint) will be running at `localhost:3000/graphql`

### Building out this project

This project provides enough scaffolding to get you started playing around with GraphQL from both the client and the server. The inital starting point is missing some key pieces that need to be implemented before anything works:

I'd recommend starting with the server, and implementing the following pieces:

`server/graphql.js`
- Schema definition based on the data in `db.json`
- Our resolver needs to fetch some actual data from `db.json`

For the client queries

`client/graphql/queries.js`
- write some queries that conform to the schema we wrote on the server-side

`client/store.js`
- we need to use the queries that we wrote above to fetch data from the server in our actions
- then we need to set this data on the state in our mutations

** Getting Advanced **

TODO


### Documentation
These are docs for the primary tools used to build this demo / playground

#### Server
- [Nodemon](https://nodemon.io/) - Runs node with hot reloading
- [Express](https://expressjs.com/en/4x/api.html) - Wonderful server and routing framework
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Allows us to field incoming GraphQL requests
- [LowDB](https://github.com/typicode/lowdb) - A super simple local JSON store, with ORM like interactions provided by lodash

#### Client
- [Vue](https://vuejs.org/v2/api/) - Our favorite front end framework
- [Vuex](https://vuex.vuejs.org/api/) - State management for Vue
- [GraphQL Tag](https://github.com/apollographql/graphql-tag) - Used to build GraphQL tags from string literals
- [Apollo Client](https//www.apollographql.com/docs/react/) - Provides tools for connection to GraphQL. Note: These docs are "for React" but remain pretty framework agnostic

#### Process management
- [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme) - This tool makes running the client and server in parallel easier by enabling us to run one yarn command to spin up both processes!
