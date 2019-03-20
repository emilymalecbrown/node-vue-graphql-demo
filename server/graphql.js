import { ApolloServer, gql } from 'apollo-server-express';
import db from './db';

// TODO - Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server via mutations.
const typeDefs = gql`
  type Country {
    name: String!
    emoji: String!
    languages: [Language]
  }

  type Language {
    native: String!
  }

  # The "Query" type is the root of all GraphQL queries
  type Query {
    countries: [Country]
  }
`;

// TODO: Resolvers define how we fetch the types in the schema.
// We will eventually retrieve countries from our local DB.
const resolvers = {
  Query: {
    countries(obj, args, context, info) {
      return db.get('countries').value();
    },
  },
  Country: {
    name(country) {
      return db.get('countries').find({ name: country.name }).value();
    }
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

export default server;
