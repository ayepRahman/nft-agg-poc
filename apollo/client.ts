/**
 * @link - https://www.youtube.com/watch?v=PYDGjTufGsk
 * TODO:  figure on how to auto generate hook for apollo client
 */

import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";

// https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let CLIENT: ApolloClient<NormalizedCacheObject>;

export function getApolloClient(forceNew?: any) {
  if (!CLIENT || forceNew) {
    const restLink = new RestLink({
      endpoints: { coingecko: "api.coingecko.com/api/v3", v2: "api.com/v2" },
    });
    const httpLink = createHttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "server.com/graphql",
    });

    CLIENT = new ApolloClient({
      ssrMode: isServer,
      // uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // confirm url to interace with api ?????
      cache: new InMemoryCache().restore(windowApolloState || {}),
      link: ApolloLink.from([restLink, httpLink]),

      /**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
    });
  }

  return CLIENT;
}
