import axios from "axios";
import { QueryGetUserArgs, User } from "graphql/types";

const getUsers = async (): Promise<User[]> => {
  try {
    const users = await axios.get("https://api.github.com/users");

    return users.data.map(
      ({
        id,
        login,
        avatar_url,
      }: {
        id: string;
        login: string;
        avatar_url: string;
      }) => ({
        id,
        login,
        avatar_url,
      })
    );
  } catch (error) {
    throw error;
  }
};

const getUser = async (_: any, args: QueryGetUserArgs): Promise<User> => {
  try {
    const user = await axios.get(`https://api.github.com/users/${args.name}`);
    return {
      id: user.data.id,
      login: user.data.login,
      avatar_url: user.data.avatar_url,
    };
  } catch (error) {
    throw error;
  }
};

export { getUsers, getUser };
