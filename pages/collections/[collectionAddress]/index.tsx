import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  Box,
  Flex,
  Heading,
  useColorMode,
  Text,
  Grid,
  GridItem,
  Image,
  theme,
  Skeleton,
} from "@chakra-ui/react";
import { themeGradient, ThemeMode } from "styles/defintions";
import {
  Token,
  TokenSort,
  useGetCollectionTokensQuery,
} from "apollo/generated/queries";
import { GetServerSideProps } from "next/types";
import { FaShoppingCart } from "react-icons/fa";
import TokenCard from "components/TokenCard";
import { convertImgUrl } from "utils/image";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const collectionAddress = Array.isArray(ctx?.query?.collectionAddress)
    ? ctx?.query?.collectionAddress[0]
    : ctx?.query?.collectionAddress || "";

  return {
    props: {
      collectionAddress,
    },
  };
};

/**
 * TODO: need additional endpoint for fetching collection info/details
 */
const Collection = ({ collectionAddress }: { collectionAddress: string }) => {
  const [selectedTokenIds, setSelectedTokenIds] = React.useState<string[]>([]);
  const [isOpenCart, setIsOpenCart] = React.useState<boolean>(false);
  const { colorMode } = useColorMode();
  const { data, loading, refetch } = useGetCollectionTokensQuery({
    variables: {
      address: [collectionAddress || ""],
      sort: TokenSort.SortByNewest,
      buynow: true,
      isHidden: false,
      boosted: true,
      lastKey: 0,
      size: 20,
      opensea: true,
      trackTotal: null,
    },
    skip: !collectionAddress,
  });

  const tokens = React.useMemo(() => {
    return data?.getCollectionTokens ?? [];
  }, [data]);

  const selectedTokens = React.useMemo(() => {
    if (!!selectedTokenIds?.length && !!tokens?.length) {
      const filteredItems = tokens.filter((t) =>
        selectedTokenIds.includes(t?.id || "")
      );

      return filteredItems?.length ? filteredItems : [];
    }
    return [];
  }, [tokens, selectedTokenIds]);

  const borderColor = colorMode === ThemeMode.LIGHT ? "gray.200" : "gray.700";

  React.useEffect(() => {
    setIsOpenCart(!!selectedTokenIds?.length);
  }, [selectedTokenIds]);

  // logic for handling fetch more data
  const handleFetchMore = () => {
    // if (fetchMore)
    //   fetchMore({
    //     variables: {
    //       id: collectionId,
    //       ...queryOptions,
    //       skip: collectionTrendsData?.trendsFromCollectionId.length,
    //       limit: FETCHING_LIMIT,
    //     },
    //     updateQuery: (prev: CollectionTrendQueryData, { fetchMoreResult }) => {
    //       if (!fetchMoreResult) return prev;
    //       return {
    //         ...prev,
    //         trendsFromCollectionId: [
    //           ...prev.trendsFromCollectionId,
    //           ...fetchMoreResult.trendsFromCollectionId,
    //         ],
    //       };
    //     },
    //   });
  };

  const handleUnSelected = (id: string) => {
    setSelectedTokenIds([...selectedTokenIds.filter((_id) => _id !== id)]);
  };

  const handleSelected = (id: string) => {
    console.log("handleSelected", id);
    setSelectedTokenIds([...selectedTokenIds, id]);
  };

  const loader = () => {
    return (
      <>
        {Array.from({ length: 20 }, (_, i) => {
          return (
            <GridItem key={i} w="100%">
              <TokenCard token={{}} isLoading />
            </GridItem>
          );
        })}
      </>
    );
  };

  return (
    <Box
      display="inline-flex"
      w="100%"
      height="calc(100vh - 50px)"
      justifyContent="space-between"
    >
      {/* filter */}
      <Box p="1rem">Filter</Box>
      {/* lists */}
      <Flex
        w="100%"
        minW="0px"
        maxW="100%"
        flexShrink="1"
        flexDir="column"
        borderX="1px"
        borderColor={borderColor}
      >
        {/* header */}
        <Flex
          w="100%"
          py="1rem"
          px="1.5rem"
          borderBottom="1px"
          borderColor={borderColor}
        >
          <Box>
            <Skeleton borderRadius="md" isLoaded={!loading}>
              <Heading
                mb="0.5rem"
                size="md"
                background={themeGradient}
                css={{
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                {tokens?.[0]?.symbol ?? "mockText"}
              </Heading>
            </Skeleton>
            <Flex alignItems="center" gap="1rem">
              <Text fontSize="0.75rem">Floor Price</Text>
              <Box h="1rem" w="1px" bgColor={borderColor} />
              <Text fontSize="0.75rem">Supply</Text>
            </Flex>
          </Box>
        </Flex>
        {/* body */}

        <InfiniteScroll
          loadMore={handleFetchMore}
          // hasMore={true}
          // loader={loader()}
        >
          <Grid
            p="1rem"
            templateColumns="repeat(auto-fill, minmax(252px, 1fr))"
            gap="1rem"
            height="calc(100vh - 136px)"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "gray",
                borderRadius: "24px",
              },
            }}
          >
            {loading ? (
              <>{loader()}</>
            ) : (
              <>
                {tokens?.length > 0 &&
                  tokens.map((t, i) => {
                    if (!t) return;
                    return (
                      <GridItem key={i} w="100%">
                        <TokenCard
                          token={t}
                          onClick={() =>
                            !selectedTokenIds.includes(t?.id || "")
                              ? handleSelected(t?.id || "")
                              : handleUnSelected(t?.id || "")
                          }
                          isSelected={selectedTokenIds.includes(t?.id || "")}
                        />
                      </GridItem>
                    );
                  })}
              </>
            )}
          </Grid>
        </InfiniteScroll>
      </Flex>
      {/* cart */}
      <Box p="1rem" w={isOpenCart ? "30rem" : "fit-content"}>
        {!isOpenCart ? (
          <FaShoppingCart fontSize={24} />
        ) : (
          <Flex flexDir="column" gap="1rem">
            <Box
              padding="0.5rem"
              borderRadius="md"
              bgColor={theme.colors.gray[700]}
            >
              {/* title */}
              <Flex gap="0.5rem" alignItems="center">
                <Text>NFTs Cart</Text>
                <Flex
                  borderRadius="full"
                  boxSize="18px"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  bgColor={theme.colors.pink[500]}
                >
                  <Text
                    fontSize="0.75rem"
                    lineHeight="0.75rem"
                    fontWeight="800"
                  >
                    {selectedTokenIds?.length}
                  </Text>
                </Flex>
              </Flex>
              {/* selected items */}
              <Box mt="1rem">
                {selectedTokens?.length > 0 &&
                  selectedTokens.map((st, i) => {
                    const src = convertImgUrl(
                      st?.animation_url || st?.image || ""
                    );

                    return (
                      <Flex
                        padding="0.5rem"
                        w="full"
                        justifyContent="space-between"
                        key={`selected-item-${i}`}
                      >
                        <Flex alignItems="center" gap="0.5rem">
                          <Image
                            borderRadius="md"
                            src={src}
                            height="3rem"
                            width="3rem"
                            alt={st?.name || ""}
                          />
                          <Box>
                            <Text fontSize="1rem" fontWeight="800">
                              {st?.token_id}
                            </Text>
                            <Text>{st?.name}</Text>
                          </Box>
                        </Flex>
                      </Flex>
                    );
                  })}
                <Box
                  h="1px"
                  w="full"
                  my="1rem"
                  bgColor={theme.colors.gray[600]}
                />

                <Flex mb="0.5rem">You Pay</Flex>
              </Box>
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Collection;
