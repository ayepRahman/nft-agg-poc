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
  Date: any;
};

export type Collection = {
  __typename?: 'Collection';
  address?: Maybe<Scalars['String']>;
  bi_week_trades?: Maybe<Scalars['Float']>;
  bi_week_trades_percentage_change?: Maybe<Scalars['Float']>;
  bi_week_volume?: Maybe<Scalars['Float']>;
  bi_week_volume_percentage_change?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['Date']>;
  decimals?: Maybe<Scalars['String']>;
  floor_price_last_updated?: Maybe<Scalars['Float']>;
  info?: Maybe<CollectionInfo>;
  isVerified?: Maybe<Scalars['Boolean']>;
  item_sold?: Maybe<Scalars['Float']>;
  lastRarityTotalCount?: Maybe<Scalars['Float']>;
  lastRarityUpdated?: Maybe<Scalars['Float']>;
  logo?: Maybe<Scalars['String']>;
  mintable_floor_price?: Maybe<Scalars['Float']>;
  month_trades?: Maybe<Scalars['Float']>;
  month_trades_percentage_change?: Maybe<Scalars['Float']>;
  month_volume?: Maybe<Scalars['Float']>;
  month_volume_percentage_change?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  opensea_floor_price?: Maybe<Scalars['Float']>;
  previous_bi_week_trades?: Maybe<Scalars['Float']>;
  previous_bi_week_volume?: Maybe<Scalars['Float']>;
  previous_month_trades?: Maybe<Scalars['Float']>;
  previous_month_volume?: Maybe<Scalars['Float']>;
  previous_six_month_trades?: Maybe<Scalars['Float']>;
  previous_six_month_volume?: Maybe<Scalars['Float']>;
  previous_three_month_trades?: Maybe<Scalars['Float']>;
  previous_three_month_volume?: Maybe<Scalars['Float']>;
  previous_week_trades?: Maybe<Scalars['Float']>;
  previous_week_volume?: Maybe<Scalars['Float']>;
  six_month_trades?: Maybe<Scalars['Float']>;
  six_month_trades_percentage_change?: Maybe<Scalars['Float']>;
  six_month_volume?: Maybe<Scalars['Float']>;
  six_month_volume_percentage_change?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  three_month_trades?: Maybe<Scalars['Float']>;
  three_month_trades_percentage_change?: Maybe<Scalars['Float']>;
  three_month_volume?: Maybe<Scalars['Float']>;
  three_month_volume_percentage_change?: Maybe<Scalars['Float']>;
  total_supply?: Maybe<Scalars['Float']>;
  total_views?: Maybe<Scalars['Float']>;
  total_volume?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['Date']>;
  week_max_sales?: Maybe<Scalars['Float']>;
  week_min_sales?: Maybe<Scalars['Float']>;
  week_trades?: Maybe<Scalars['Float']>;
  week_trades_percentage_change?: Maybe<Scalars['Float']>;
  week_volume?: Maybe<Scalars['Float']>;
  week_volume_data_points?: Maybe<Array<Maybe<WeekVolumeDataPoints>>>;
  week_volume_percentage_change?: Maybe<Scalars['Float']>;
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

export type CollectionTokenResult = {
  __typename?: 'CollectionTokenResult';
  tokens: Array<Maybe<Token>>;
  total: Scalars['Int'];
};

export type OpenSeaOrder = {
  __typename?: 'OpenSeaOrder';
  address?: Maybe<Scalars['String']>;
  auction_type?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  ending_price?: Maybe<Scalars['String']>;
  ending_price_eth?: Maybe<Scalars['Float']>;
  listing_time?: Maybe<Scalars['String']>;
  starting_price?: Maybe<Scalars['String']>;
  starting_price_eth?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCollectionTokens: CollectionTokenResult;
  getTokenDetails?: Maybe<Token>;
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
  searchTerm?: InputMaybe<Scalars['String']>;
  size: Scalars['Int'];
  sort?: InputMaybe<TokenSort>;
  subcategory?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  track_total?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetTokenDetailsArgs = {
  contractAddress: Scalars['String'];
  tokenId?: InputMaybe<Scalars['String']>;
};


export type QueryGetUserArgs = {
  name: Scalars['String'];
};


export type QuerySearchCollectionsArgs = {
  category?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  max_trades?: InputMaybe<Scalars['Int']>;
  max_volume?: InputMaybe<Scalars['Int']>;
  min_trades?: InputMaybe<Scalars['Int']>;
  min_volume?: InputMaybe<Scalars['Int']>;
  network?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['String']>;
  search_term?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  address?: Maybe<Scalars['String']>;
  animation_url?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<TokenAttribute>>>;
  chain?: Maybe<Scalars['String']>;
  contract_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  current_owner?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  last_offered_price?: Maybe<Scalars['Float']>;
  last_purchased_price?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  opensea_order?: Maybe<OpenSeaOrder>;
  p_rarity?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  token_uri?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
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

export type WeekVolumeDataPoints = {
  __typename?: 'WeekVolumeDataPoints';
  timestamp?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

export type GetCollectionTokensQueryVariables = Exact<{
  address: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  lastKey: Scalars['Int'];
  size: Scalars['Int'];
  searchTerm?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  subcategory?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  chain?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  attributes?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  sort?: InputMaybe<TokenSort>;
  buynow?: InputMaybe<Scalars['Boolean']>;
  isHidden?: InputMaybe<Scalars['Boolean']>;
  boosted?: InputMaybe<Scalars['Boolean']>;
  trackTotal?: InputMaybe<Scalars['Boolean']>;
  opensea?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetCollectionTokensQuery = { __typename?: 'Query', getCollectionTokens: { __typename?: 'CollectionTokenResult', total: number, tokens: Array<{ __typename?: 'Token', id?: string | null, contract_name?: string | null, name?: string | null, description?: string | null, address?: string | null, token_id?: string | null, current_owner?: string | null, symbol?: string | null, token_uri?: string | null, chain?: string | null, image?: string | null, animation_url?: string | null, created_at?: any | null, updated_at?: any | null, last_purchased_price?: number | null, view_count?: number | null, isVerified?: boolean | null, last_offered_price?: number | null, p_rarity?: number | null, opensea_order?: { __typename?: 'OpenSeaOrder', address?: string | null, token_id?: string | null, listing_time?: string | null, starting_price?: string | null, ending_price?: string | null, starting_price_eth?: number | null, ending_price_eth?: number | null, duration?: string | null, auction_type?: string | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', trait_type?: string | null, value?: string | null } | null> | null } | null> } };

export type GetTokenDetailsQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  tokenId?: InputMaybe<Scalars['String']>;
}>;


export type GetTokenDetailsQuery = { __typename?: 'Query', getTokenDetails?: { __typename?: 'Token', id?: string | null, contract_name?: string | null, name?: string | null, description?: string | null, address?: string | null, token_id?: string | null, current_owner?: string | null, symbol?: string | null, token_uri?: string | null, chain?: string | null, image?: string | null, animation_url?: string | null, created_at?: any | null, updated_at?: any | null, last_purchased_price?: number | null, view_count?: number | null, isVerified?: boolean | null, last_offered_price?: number | null, p_rarity?: number | null, attributes?: Array<{ __typename?: 'TokenAttribute', trait_type?: string | null, value?: string | null } | null> | null, opensea_order?: { __typename?: 'OpenSeaOrder', address?: string | null, token_id?: string | null, listing_time?: string | null, starting_price?: string | null, ending_price?: string | null, starting_price_eth?: number | null, ending_price_eth?: number | null, duration?: string | null, auction_type?: string | null } | null } | null };

export type GetUserQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', avatar_url?: string | null, login?: string | null, id?: string | null } };

export type SearchCollectionsQueryVariables = Exact<{
  period?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  maxVolume?: InputMaybe<Scalars['Int']>;
  minVolume?: InputMaybe<Scalars['Int']>;
  minTrades?: InputMaybe<Scalars['Int']>;
  maxTrades?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
}>;


export type SearchCollectionsQuery = { __typename?: 'Query', searchCollections?: Array<{ __typename?: 'Collection', decimals?: string | null, logo?: string | null, name?: string | null, symbol?: string | null, address?: string | null, created_at?: any | null, updated_at?: any | null, total_supply?: number | null, item_sold?: number | null, total_volume?: number | null, lastRarityUpdated?: number | null, lastRarityTotalCount?: number | null, store_id?: string | null, isVerified?: boolean | null, month_trades?: number | null, floor_price_last_updated?: number | null, previous_three_month_trades?: number | null, mintable_floor_price?: number | null, week_volume?: number | null, week_trades?: number | null, six_month_trades?: number | null, month_volume?: number | null, previous_bi_week_volume?: number | null, previous_week_trades?: number | null, previous_six_month_volume?: number | null, previous_six_month_trades?: number | null, three_month_volume?: number | null, previous_week_volume?: number | null, previous_month_volume?: number | null, previous_three_month_volume?: number | null, bi_week_volume?: number | null, previous_month_trades?: number | null, three_month_trades?: number | null, opensea_floor_price?: number | null, bi_week_trades?: number | null, six_month_volume?: number | null, previous_bi_week_trades?: number | null, week_min_sales?: number | null, week_max_sales?: number | null, week_volume_percentage_change?: number | null, bi_week_volume_percentage_change?: number | null, month_volume_percentage_change?: number | null, three_month_volume_percentage_change?: number | null, six_month_volume_percentage_change?: number | null, week_trades_percentage_change?: number | null, bi_week_trades_percentage_change?: number | null, month_trades_percentage_change?: number | null, three_month_trades_percentage_change?: number | null, six_month_trades_percentage_change?: number | null, total_views?: number | null, info?: { __typename?: 'CollectionInfo', category?: string | null, subcategory?: string | null, description?: string | null, cover_image?: string | null, bg_image?: string | null, sub_title?: string | null, title?: string | null, royalty?: number | null } | null, week_volume_data_points?: Array<{ __typename?: 'WeekVolumeDataPoints', timestamp?: number | null, volume?: number | null } | null> | null } | null> | null };


export const GetCollectionTokensDocument = gql`
    query GetCollectionTokens($address: [String]!, $lastKey: Int!, $size: Int!, $searchTerm: String, $category: [String], $subcategory: [String], $chain: [String], $attributes: [String], $sort: TokenSort, $buynow: Boolean, $isHidden: Boolean, $boosted: Boolean, $trackTotal: Boolean, $opensea: Boolean) {
  getCollectionTokens(
    address: $address
    lastKey: $lastKey
    size: $size
    searchTerm: $searchTerm
    category: $category
    subcategory: $subcategory
    chain: $chain
    attributes: $attributes
    sort: $sort
    buynow: $buynow
    isHidden: $isHidden
    boosted: $boosted
    track_total: $trackTotal
    opensea: $opensea
  ) {
    total
    tokens {
      id
      contract_name
      name
      description
      address
      token_id
      current_owner
      symbol
      token_uri
      chain
      image
      animation_url
      created_at
      updated_at
      last_purchased_price
      view_count
      isVerified
      last_offered_price
      p_rarity
      opensea_order {
        address
        token_id
        listing_time
        starting_price
        ending_price
        starting_price_eth
        ending_price_eth
        duration
        auction_type
      }
      attributes {
        trait_type
        value
      }
    }
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
 *      address: // value for 'address'
 *      lastKey: // value for 'lastKey'
 *      size: // value for 'size'
 *      searchTerm: // value for 'searchTerm'
 *      category: // value for 'category'
 *      subcategory: // value for 'subcategory'
 *      chain: // value for 'chain'
 *      attributes: // value for 'attributes'
 *      sort: // value for 'sort'
 *      buynow: // value for 'buynow'
 *      isHidden: // value for 'isHidden'
 *      boosted: // value for 'boosted'
 *      trackTotal: // value for 'trackTotal'
 *      opensea: // value for 'opensea'
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
export const GetTokenDetailsDocument = gql`
    query GetTokenDetails($contractAddress: String!, $tokenId: String) {
  getTokenDetails(contractAddress: $contractAddress, tokenId: $tokenId) {
    id
    contract_name
    name
    description
    address
    token_id
    current_owner
    symbol
    token_uri
    chain
    attributes {
      trait_type
      value
    }
    image
    animation_url
    created_at
    updated_at
    last_purchased_price
    view_count
    isVerified
    last_offered_price
    p_rarity
    opensea_order {
      address
      token_id
      listing_time
      starting_price
      ending_price
      starting_price_eth
      ending_price_eth
      duration
      auction_type
    }
  }
}
    `;

/**
 * __useGetTokenDetailsQuery__
 *
 * To run a query within a React component, call `useGetTokenDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenDetailsQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *      tokenId: // value for 'tokenId'
 *   },
 * });
 */
export function useGetTokenDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>(GetTokenDetailsDocument, options);
      }
export function useGetTokenDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>(GetTokenDetailsDocument, options);
        }
export type GetTokenDetailsQueryHookResult = ReturnType<typeof useGetTokenDetailsQuery>;
export type GetTokenDetailsLazyQueryHookResult = ReturnType<typeof useGetTokenDetailsLazyQuery>;
export type GetTokenDetailsQueryResult = Apollo.QueryResult<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>;
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
    query SearchCollections($period: String, $limit: Int, $offset: Int, $order: String, $sortBy: String, $maxVolume: Int, $minVolume: Int, $minTrades: Int, $maxTrades: Int, $category: String, $network: Int, $searchTerm: String) {
  searchCollections(
    period: $period
    limit: $limit
    offset: $offset
    order: $order
    sort_by: $sortBy
    max_volume: $maxVolume
    min_volume: $minVolume
    min_trades: $minTrades
    max_trades: $maxTrades
    category: $category
    network: $network
    search_term: $searchTerm
  ) {
    decimals
    logo
    name
    symbol
    address
    created_at
    updated_at
    total_supply
    item_sold
    total_volume
    lastRarityUpdated
    lastRarityTotalCount
    store_id
    info {
      category
      subcategory
      description
      cover_image
      bg_image
      sub_title
      title
      royalty
    }
    isVerified
    month_trades
    floor_price_last_updated
    previous_three_month_trades
    mintable_floor_price
    week_volume
    week_trades
    six_month_trades
    month_volume
    previous_bi_week_volume
    previous_week_trades
    previous_six_month_volume
    previous_six_month_trades
    three_month_volume
    previous_week_volume
    previous_month_volume
    previous_three_month_volume
    bi_week_volume
    previous_month_trades
    three_month_trades
    opensea_floor_price
    bi_week_trades
    six_month_volume
    previous_bi_week_trades
    week_volume_data_points {
      timestamp
      volume
    }
    week_min_sales
    week_max_sales
    week_volume_percentage_change
    bi_week_volume_percentage_change
    month_volume_percentage_change
    three_month_volume_percentage_change
    six_month_volume_percentage_change
    week_trades_percentage_change
    bi_week_trades_percentage_change
    month_trades_percentage_change
    three_month_trades_percentage_change
    six_month_trades_percentage_change
    total_views
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
 *      period: // value for 'period'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order: // value for 'order'
 *      sortBy: // value for 'sortBy'
 *      maxVolume: // value for 'maxVolume'
 *      minVolume: // value for 'minVolume'
 *      minTrades: // value for 'minTrades'
 *      maxTrades: // value for 'maxTrades'
 *      category: // value for 'category'
 *      network: // value for 'network'
 *      searchTerm: // value for 'searchTerm'
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