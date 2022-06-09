import { GraphQLResolveInfo } from 'graphql';
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
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OpenSeaOrder: ResolverTypeWrapper<OpenSeaOrder>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Token: ResolverTypeWrapper<Token>;
  TokenAttribute: ResolverTypeWrapper<TokenAttribute>;
  TokenSort: TokenSort;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Collection: Collection;
  CollectionInfo: CollectionInfo;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  OpenSeaOrder: OpenSeaOrder;
  Query: {};
  String: Scalars['String'];
  Token: Token;
  TokenAttribute: TokenAttribute;
  User: User;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  decimals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['CollectionInfo']>, ParentType, ContextType>;
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opensea_floor_price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_supply?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type OpenSeaOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpenSeaOrder'] = ResolversParentTypes['OpenSeaOrder']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  auction_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ending_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ending_price_eth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listing_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  starting_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  starting_price_eth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCollectionTokens?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType, RequireFields<QueryGetCollectionTokensArgs, 'address' | 'lastKey' | 'size'>>;
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
  created_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  current_owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last_offered_price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  last_purchased_price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opensea_order?: Resolver<Maybe<ResolversTypes['OpenSeaOrder']>, ParentType, ContextType>;
  p_rarity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type Resolvers<ContextType = any> = {
  Collection?: CollectionResolvers<ContextType>;
  CollectionInfo?: CollectionInfoResolvers<ContextType>;
  OpenSeaOrder?: OpenSeaOrderResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenAttribute?: TokenAttributeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

