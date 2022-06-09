import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Collection = {
  __typename?: 'Collection';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  decimals?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  info?: Maybe<CollectionInfo>;
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  opensea_floor_price?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  total_supply?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type CollectionInfo = {
  __typename?: 'CollectionInfo';
  bg_image?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  cover_image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  royalty?: Maybe<Scalars['Int']>;
  sub_title?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type OpenSeaOrder = {
  __typename?: 'OpenSeaOrder';
  address?: Maybe<Scalars['String']>;
  auction_type?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  ending_price?: Maybe<Scalars['String']>;
  ending_price_eth?: Maybe<Scalars['Int']>;
  listing_time?: Maybe<Scalars['String']>;
  starting_price?: Maybe<Scalars['String']>;
  starting_price_eth?: Maybe<Scalars['Int']>;
  token_id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCollectionTokens: Array<Maybe<Token>>;
  getUser: User;
  getUsers?: Maybe<Array<Maybe<User>>>;
  searchCollections?: Maybe<Array<Maybe<Collection>>>;
};


export type QueryGetCollectionTokensArgs = {
  address: Array<InputMaybe<Scalars['String']>>;
  attributes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  boosted?: InputMaybe<Scalars['Boolean']>;
  buynow?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  chain?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isHidden?: InputMaybe<Scalars['Boolean']>;
  lastKey: Scalars['Int'];
  opensea?: InputMaybe<Scalars['Boolean']>;
  size: Scalars['Int'];
  sort?: InputMaybe<TokenSort>;
  subcategory?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  track_total?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetUserArgs = {
  name: Scalars['String'];
};


export type QuerySearchCollectionsArgs = {
  address?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<Scalars['String']>;
  claimed_by?: InputMaybe<Scalars['String']>;
  lastKey?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  topSelling?: InputMaybe<Scalars['Boolean']>;
  topSupply?: InputMaybe<Scalars['Boolean']>;
};

export type Token = {
  __typename?: 'Token';
  address?: Maybe<Scalars['String']>;
  animation_url?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<TokenAttribute>>>;
  chain?: Maybe<Scalars['String']>;
  contract_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  current_owner?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  last_offered_price?: Maybe<Scalars['Int']>;
  last_purchased_price?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  opensea_order?: Maybe<OpenSeaOrder>;
  p_rarity?: Maybe<Scalars['Int']>;
  symbol?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  token_uri?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  view_count?: Maybe<Scalars['Int']>;
};

export type TokenAttribute = {
  __typename?: 'TokenAttribute';
  trait_type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum TokenSort {
  SortByHighest = 'sortByHighest',
  SortByLowest = 'sortByLowest',
  SortByMostBids = 'sortByMostBids',
  SortByNewest = 'sortByNewest',
  SortBymostView = 'sortBymostView'
}

export type User = {
  __typename?: 'User';
  avatar_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  login?: Maybe<Scalars['String']>;
};

export type GetCollectionTokensQueryVariables = Exact<{
  sort?: InputMaybe<TokenSort>;
  buynow?: InputMaybe<Scalars['Boolean']>;
  isHidden?: InputMaybe<Scalars['Boolean']>;
  boosted?: InputMaybe<Scalars['Boolean']>;
  opensea?: InputMaybe<Scalars['Boolean']>;
  trackTotal?: InputMaybe<Scalars['Boolean']>;
  address: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  lastKey: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetCollectionTokensQuery = { __typename?: 'Query', getCollectionTokens: Array<{ __typename?: 'Token', name?: string | null, id?: string | null, contract_name?: string | null, description?: string | null, address?: string | null, animation_url?: string | null, image?: string | null, token_uri?: string | null, symbol?: string | null, token_id?: string | null, opensea_order?: { __typename?: 'OpenSeaOrder', starting_price?: string | null, address?: string | null } | null } | null> };

export type GetUserQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', avatar_url?: string | null, login?: string | null, id?: string | null } };

export type SearchCollectionsQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
  topSupply?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type SearchCollectionsQuery = { __typename?: 'Query', searchCollections?: Array<{ __typename?: 'Collection', name?: string | null, address?: string | null, total_supply?: number | null } | null> | null };


export const GetCollectionTokensDocument = gql`
    query GetCollectionTokens($sort: TokenSort, $buynow: Boolean, $isHidden: Boolean, $boosted: Boolean, $opensea: Boolean, $trackTotal: Boolean, $address: [String]!, $lastKey: Int!, $size: Int!) {
  getCollectionTokens(
    sort: $sort
    buynow: $buynow
    isHidden: $isHidden
    boosted: $boosted
    opensea: $opensea
    track_total: $trackTotal
    address: $address
    lastKey: $lastKey
    size: $size
  ) {
    name
    id
    contract_name
    description
    address
    opensea_order {
      starting_price
      address
    }
    animation_url
    image
    token_uri
    symbol
    token_id
  }
}
    `;

/**
 * __useGetCollectionTokensQuery__
 *
 * To run a query within a React component, call `useGetCollectionTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionTokensQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      buynow: // value for 'buynow'
 *      isHidden: // value for 'isHidden'
 *      boosted: // value for 'boosted'
 *      opensea: // value for 'opensea'
 *      trackTotal: // value for 'trackTotal'
 *      address: // value for 'address'
 *      lastKey: // value for 'lastKey'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetCollectionTokensQuery(baseOptions: Apollo.QueryHookOptions<GetCollectionTokensQuery, GetCollectionTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCollectionTokensQuery, GetCollectionTokensQueryVariables>(GetCollectionTokensDocument, options);
      }
export function useGetCollectionTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionTokensQuery, GetCollectionTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCollectionTokensQuery, GetCollectionTokensQueryVariables>(GetCollectionTokensDocument, options);
        }
export type GetCollectionTokensQueryHookResult = ReturnType<typeof useGetCollectionTokensQuery>;
export type GetCollectionTokensLazyQueryHookResult = ReturnType<typeof useGetCollectionTokensLazyQuery>;
export type GetCollectionTokensQueryResult = Apollo.QueryResult<GetCollectionTokensQuery, GetCollectionTokensQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($name: String!) {
  getUser(name: $name) {
    avatar_url
    login
    id
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const SearchCollectionsDocument = gql`
    query SearchCollections($searchTerm: String, $topSupply: Boolean, $size: Int) {
  searchCollections(searchTerm: $searchTerm, topSupply: $topSupply, size: $size) {
    name
    address
    total_supply
  }
}
    `;

/**
 * __useSearchCollectionsQuery__
 *
 * To run a query within a React component, call `useSearchCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCollectionsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      topSupply: // value for 'topSupply'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useSearchCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<SearchCollectionsQuery, SearchCollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCollectionsQuery, SearchCollectionsQueryVariables>(SearchCollectionsDocument, options);
      }
export function useSearchCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCollectionsQuery, SearchCollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCollectionsQuery, SearchCollectionsQueryVariables>(SearchCollectionsDocument, options);
        }
export type SearchCollectionsQueryHookResult = ReturnType<typeof useSearchCollectionsQuery>;
export type SearchCollectionsLazyQueryHookResult = ReturnType<typeof useSearchCollectionsLazyQuery>;
export type SearchCollectionsQueryResult = Apollo.QueryResult<SearchCollectionsQuery, SearchCollectionsQueryVariables>;