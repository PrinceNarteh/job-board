import "dotenv/config";
import fs from "fs";
import path from "path";
import express from "express";
import {ApolloServer, gql} from "apollo-server-express";
import cors from "cors";
import {expressJwt} from "./utils/expressJwt";
import {logger} from "./utils/logger";
import resolvers from "./graphql/resolvers";
import {dbConnect} from "./utils/dbConnect";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors(), express.json());

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "graphql", "schema.graphql"), "utf-8")
);

const start = async () => {
  // database connection
  await dbConnect();

  // setting up ApolloServer
  const apolloServer = new ApolloServer({typeDefs, resolvers});
  await apolloServer.start();
  apolloServer.applyMiddleware({app, path: "/graphql"});

  // listening to PORT
  app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
  });
};

start();
