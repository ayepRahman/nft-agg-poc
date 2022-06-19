import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionInfo: ResolverTypeWrapper<CollectionInfo>;
  CollectionTokenResult: ResolverTypeWrapper<CollectionTokenResult>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OpenSeaOrder: ResolverTypeWrapper<OpenSeaOrder>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Token: ResolverTypeWrapper<Token>;
  TokenAttribute: ResolverTypeWrapper<TokenAttribute>;
  TokenSort: TokenSort;
  User: ResolverTypeWrapper<User>;
  WeekVolumeDataPoints: ResolverTypeWrapper<WeekVolumeDataPoints>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Collection: Collection;
  CollectionInfo: CollectionInfo;
  CollectionTokenResult: CollectionTokenResult;
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  OpenSeaOrder: OpenSeaOrder;
  Query: {};
  String: Scalars['String'];
  Token: Token;
  TokenAttribute: TokenAttribute;
  User: User;
  WeekVolumeDataPoints: WeekVolumeDataPoints;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bi_week_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bi_week_trades_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bi_week_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bi_week_volume_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  decimals?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  floor_price_last_updated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['CollectionInfo']>, ParentType, ContextType>;
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  item_sold?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastRarityTotalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastRarityUpdated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mintable_floor_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  month_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  month_trades_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  month_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  month_volume_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opensea_floor_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_bi_week_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_bi_week_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_month_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_month_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_six_month_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_six_month_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_three_month_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_three_month_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_week_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  previous_week_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  six_month_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  six_month_trades_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  six_month_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  six_month_volume_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  store_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  three_month_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  three_month_trades_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  three_month_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  three_month_volume_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total_supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total_views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  week_max_sales?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  week_min_sales?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  week_trades?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  week_trades_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  week_volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  week_volume_data_points?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeekVolumeDataPoints']>>>, ParentType, ContextType>;
  week_volume_percentage_change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionInfo'] = ResolversParentTypes['CollectionInfo']> = {
  bg_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cover_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sub_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subcategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionTokenResult'] = ResolversParentTypes['CollectionTokenResult']> = {
  tokens?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type OpenSeaOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpenSeaOrder'] = ResolversParentTypes['OpenSeaOrder']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  auction_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ending_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ending_price_eth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  listing_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  starting_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  starting_price_eth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCollectionTokens?: Resolver<ResolversTypes['CollectionTokenResult'], ParentType, ContextType, RequireFields<QueryGetCollectionTokensArgs, 'address' | 'lastKey' | 'size'>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'name'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  searchCollections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Collection']>>>, ParentType, ContextType, Partial<QuerySearchCollectionsArgs>>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animation_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TokenAttribute']>>>, ParentType, ContextType>;
  chain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  current_owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last_offered_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  last_purchased_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opensea_order?: Resolver<Maybe<ResolversTypes['OpenSeaOrder']>, ParentType, ContextType>;
  p_rarity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  view_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAttribute'] = ResolversParentTypes['TokenAttribute']> = {
  trait_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeekVolumeDataPointsResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeekVolumeDataPoints'] = ResolversParentTypes['WeekVolumeDataPoints']> = {
  timestamp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Collection?: CollectionResolvers<ContextType>;
  CollectionInfo?: CollectionInfoResolvers<ContextType>;
  CollectionTokenResult?: CollectionTokenResultResolvers<ContextType>;
  Date?: GraphQLScalarType;
  OpenSeaOrder?: OpenSeaOrderResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenAttribute?: TokenAttributeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WeekVolumeDataPoints?: WeekVolumeDataPointsResolvers<ContextType>;
};

