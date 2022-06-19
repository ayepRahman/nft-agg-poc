/**
 * @link - https://www.graphql-code-generator.com/docs/guides/graphql-server-apollo-yoga
 */

import Cors from "micro-cors";
import { ServerResponse } from "http";
// import { printSchema } from "graphql";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { resolvers } from "graphql/resolvers";
import { GRAPHL_API_PATH } from "config";

const typeDefs = loadSchemaSync("graphql/schemas/*", {
  loaders: [new GraphQLFileLoader()],
});

const cors = Cors();
const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default cors(async function handler(
  req: MicroRequest,
  res: ServerResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: GRAPHL_API_PATH,
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
