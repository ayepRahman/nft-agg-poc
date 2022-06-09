// server
export const GRAPHL_API_PATH = "/api/graphql";

// client
export const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
  "http://localhost:3000/api/graphql";
