import express from 'express';

import apolloServer from './graphql';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(`We're working.`));

apolloServer.applyMiddleware({ app });

app.listen(port, () => console.log(`🚀 GraphQL Server ready at http://localhost:4000${apolloServer.graphqlPath}`));
