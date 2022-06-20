import axios from "axios";
import {
  Collection,
  CollectionTokenResult,
  QueryGetCollectionTokensArgs,
  QuerySearchCollectionsArgs,
  Token,
} from "graphql/types";
import url from "url";

const searchCollections = async (
  _: any,
  args: QuerySearchCollectionsArgs
): Promise<Collection[] | Error> => {
  try {
    let searchParams: { [key: string]: string } = {};

    Object.keys(args).forEach((key) => {
      if (!!args?.[key as keyof QuerySearchCollectionsArgs]) {
        searchParams[key] =
          args?.[key as keyof QuerySearchCollectionsArgs]?.toString() || "";
      }
    });

    const params = new url.URLSearchParams(searchParams);
    const apiUrl = `${
      process.env.NEXT_SERVER_CONTRACT_SEARCH_URL || ""
    }/?${params.toString()}`;

    const res = await axios.get(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });

    const data = res?.data?.items ?? [];

    return data;
  } catch (error: any) {
    console.log("ERROR", error);
    return new Error(error);
  }
};

const getCollectionTokens = async (
  _: any,
  args: QueryGetCollectionTokensArgs
): Promise<CollectionTokenResult | Error> => {
  try {
    const url = process.env.NEXT_SERVER_TOKEN_SEARCH_URL || "";
    const res = await axios.post(url, {
      ...args,
    });

    const data = res?.data ?? null;
    const mappedData: Token[] = !!data?.hits?.length
      ? data?.hits?.map((h: any) => {
          return {
            ...h._source,
            total_supply: h?._source?.total_supply
              ? Number(h?._source?.total_supply)
              : 0,
          };
        })
      : [];

    return {
      total: data?.total?.value || 0,
      tokens: mappedData,
    };
  } catch (error: any) {
    console.log("ERROR", error);
    return new Error(error);
  }
};

export { searchCollections, getCollectionTokens };
