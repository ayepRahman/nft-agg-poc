import axios from "axios";
import { QueryGetTokenDetailsArgs, Token } from "graphql/types";

const getTokenDetails = async (
  _: any,
  args: QueryGetTokenDetailsArgs
): Promise<Token> => {
  try {
    const url = process.env.NEXT_SERVER_TOKEN_DETAILS_URL || "";
    const apiUrl = `${url.replace(
      ":id",
      `${args?.contractAddress}:${args?.tokenId}`
    )}?network=1`;

    const res = await axios.get(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });

    return res?.data || {};
  } catch (error: any) {
    console.log("ERROR", error?.message);
    return new Error(error);
  }
};

export { getTokenDetails };
