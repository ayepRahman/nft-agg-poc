import { Resolvers } from "graphql/types";
import * as queries from "graphql/resolvers/queries";

export const resolvers: Resolvers = {
  Query: { ...queries },
};
