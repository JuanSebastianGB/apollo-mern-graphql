import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import http from 'http';
import { resolvers } from '../graphql/resolvers';
import { typeDefs } from '../graphql/typesDef';
import { connectDB } from './config/db';

connectDB();

export const startApolloServer = async (
  types: typeof typeDefs,
  resolve: typeof resolvers
) => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolve,
  });

  await server.start();

  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  await new Promise(() =>
    httpServer.listen({ port: 4000 }, () => {
      console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    })
  );
};
