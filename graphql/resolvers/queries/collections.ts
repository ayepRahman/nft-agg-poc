import axios from "axios";
import {
  Collection,
  QueryGetCollectionTokensArgs,
  QuerySearchCollectionsArgs,
  Token,
} from "graphql/types";

const searchCollections = async (
  _: any,
  args: QuerySearchCollectionsArgs
): Promise<Collection[]> => {
  try {
    const url = process.env.NEXT_SERVER_CONTRACT_SEARCH_URL || "";
    const res = await axios.post(url, {
      ...args,
    });

    const data = res?.data ?? null;
    const mappedData = !!data?.hits?.length
      ? data?.hits?.map((h: any) => h._source)
      : [];

    return mappedData;
  } catch (error: any) {
    throw error;
  }
};

const getCollectionTokens = async (
  _: any,
  args: QueryGetCollectionTokensArgs
): Promise<Token[]> => {
  const url = process.env.NEXT_SERVER_TOKEN_SEARCH_URL || "";
  const res = await axios.post(url, {
    ...args,
  });
  const data = res?.data ?? null;
  const mappedData = !!data?.hits?.length
    ? data?.hits?.map((h: any) => h._source)
    : [];

  return mappedData;
};

export { searchCollections, getCollectionTokens };
