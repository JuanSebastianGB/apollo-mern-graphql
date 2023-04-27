import { resolvers } from '../graphql/resolvers';
import { typeDefs } from '../graphql/typesDef';
import { startApolloServer } from './app';

startApolloServer(typeDefs, resolvers);
