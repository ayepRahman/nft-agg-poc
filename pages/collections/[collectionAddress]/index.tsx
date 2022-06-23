import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  Box,
  Flex,
  Heading,
  useColorMode,
  Text,
  Grid,
  GridItem,
  theme,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { themeGradient, ThemeMode } from "styles/defintions";
import {
  GetCollectionTokensQuery,
  TokenSort,
  useGetCollectionTokensQuery,
} from "apollo/generated/queries";
import { GetServerSideProps } from "next/types";
import { FaShoppingCart, FaEthereum, FaTimes, FaFilter } from "react-icons/fa";
import TokenCard from "components/TokenCard";
import Image from "components/Image";
import { convertImgUrl } from "utils/image";
import WalleConnectModal from "components/WalletDrawerButton";
import { useConnect } from "wagmi";

const FETCHING_LIMIT = 24;

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

const Collection = ({ collectionAddress }: { collectionAddress: string }) => {
  const { isConnected } = useConnect();
  const [selectedTokenIds, setSelectedTokenIds] = React.useState<string[]>([]);
  const [isOpenCart, setIsOpenCart] = React.useState<boolean>(false);
  const { colorMode } = useColorMode();

  const variables = React.useMemo(() => {
    return {
      address: [collectionAddress || ""],
      sort: TokenSort.SortByNewest,
      buynow: true,
      isHidden: false,
      boosted: true,
      lastKey: 0,
      size: FETCHING_LIMIT,
      opensea: true,
      trackTotal: true,
    };
  }, [collectionAddress]);

  const { data, loading, fetchMore } = useGetCollectionTokensQuery({
    variables,
    skip: !collectionAddress,
  });

  const tokens = React.useMemo(() => {
    return data?.getCollectionTokens?.tokens ?? [];
  }, [data]);
  const total = React.useMemo(() => {
    return data?.getCollectionTokens?.total ?? 0;
  }, [data]);

  const hasMore = tokens?.length < total;

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
    if (fetchMore)
      fetchMore({
        variables: {
          ...variables,
          lastKey: tokens.length,
        },
        updateQuery: (prev: GetCollectionTokensQuery, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          return {
            getCollectionTokens: {
              total: fetchMoreResult?.getCollectionTokens?.total,
              tokens: [
                ...prev?.getCollectionTokens?.tokens,
                ...fetchMoreResult?.getCollectionTokens?.tokens,
              ],
            },
          };
        },
      });
  };

  const handleUnSelected = (id: string) => {
    setSelectedTokenIds([...selectedTokenIds.filter((_id) => _id !== id)]);
  };

  const handleSelected = (id: string) => {
    setSelectedTokenIds([...selectedTokenIds, id]);
  };

  const loader = (length?: number) => {
    return (
      <>
        {Array.from({ length: 30 }, (_, i) => {
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
      height="calc(100vh - 79px)"
      justifyContent="space-between"
    >
      {/* filter */}
      <Box p="1rem">
        <FaFilter size="1rem" />
      </Box>
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
          dataLength={tokens?.length}
          next={handleFetchMore}
          hasMore={hasMore}
          loader={
            <Grid
              p="1rem"
              alignItems="flex-start"
              templateColumns="repeat(auto-fill, minmax(242px, 1fr))"
              templateRows="auto 1fr"
              gap="1rem"
            >
              <>{loader(12)}</>
            </Grid>
          }
          height="calc(100vh - 156px)"
          scrollThreshold={0.7}
        >
          <Grid
            p="1rem"
            alignItems="flex-start"
            templateColumns="repeat(auto-fill, minmax(242px, 1fr))"
            templateRows="auto 1fr"
            gap="1rem"
          >
            {loading ? (
              <>{loader()}</>
            ) : (
              <>
                {tokens?.length > 0 &&
                  tokens.map((t, i) => {
                    if (!t) return;
                    return (
                      <GridItem key={t?.address} w="100%">
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
      <Box
        p="1rem"
        w="fit-content"
        as={motion.div}
        animate={isOpenCart ? "open" : "closed"}
        variants={{
          open: {
            width: "30rem",
            transition: {
              duration: 0.3,
            },
          },
          closed: {
            width: "3rem",
            transition: {
              duration: 0.3,
            },
          },
        }}
      >
        {!isOpenCart ? (
          <FaShoppingCart fontSize="1rem" />
        ) : (
          <Flex
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            flexDir="column"
            gap="1rem"
          >
            <Flex w="full">
              <Box
                ml="auto"
                cursor="pointer"
                onClick={() => setSelectedTokenIds([])}
              >
                <FaTimes size="1rem" />
              </Box>
            </Flex>
            {/* cart card */}
            <Box
              padding="0.5rem"
              borderRadius="md"
              bgColor={theme.colors.gray[colorMode === "light" ? 100 : 700]}
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
                        borderRadius="md"
                        padding="0.5rem"
                        w="full"
                        justifyContent="space-between"
                        key={`selected-item-${i}`}
                        css={{
                          "&:hover": {
                            backgroundColor: theme.colors.gray[400],
                          },
                        }}
                      >
                        <Flex alignItems="center" gap="0.5rem">
                          <Image
                            src={src}
                            height="48px"
                            width="48px"
                            overflow="hidden"
                            alt={st?.name || ""}
                          />
                          <Box>
                            <Text fontSize="1rem" fontWeight="800">
                              {st?.token_id}
                            </Text>
                            <Text>{st?.name}</Text>
                          </Box>
                        </Flex>

                        <Flex alignItems="center" gap="0.25rem">
                          <Text>{st?.opensea_order?.starting_price_eth}</Text>
                          <FaEthereum />
                        </Flex>
                      </Flex>
                    );
                  })}
                <Box
                  h="1px"
                  w="full"
                  my="1rem"
                  bgColor={theme.colors.gray[colorMode === "light" ? 400 : 600]}
                />

                <Flex mb="0.5rem" w="full" justifyContent="space-between">
                  <Text>You Pay</Text>
                  <Flex alignItems="center" gap="0.5rem">
                    <Text>
                      {selectedTokens
                        .map((st) => st?.opensea_order?.starting_price_eth ?? 0)
                        .reduce((a, b) => a + b, 0)}
                    </Text>
                    <FaEthereum />
                  </Flex>
                </Flex>
              </Box>
            </Box>

            {isConnected ? (
              <Button
                colorScheme="pink"
                onClick={() => alert("Feature coming soon!")}
              >
                Proceed to Checkout
              </Button>
            ) : (
              <WalleConnectModal />
            )}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Collection;
