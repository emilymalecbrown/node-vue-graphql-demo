import { ApolloServer, gql } from 'apollo-server-express';
import db from './db';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  type Country {
    name: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # Later add
  type Query {
    countries: [Country]
  }
`;

// Resolvers define the technique for fetching the types in the schema.
// We will eventually retrieve countries from our local DB.
const resolvers = {
  Query: {
    countries: () => {
      return ''
    },
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

export default server;
