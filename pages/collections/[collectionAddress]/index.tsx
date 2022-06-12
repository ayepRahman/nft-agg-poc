import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  useColorMode,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { themeGradient, ThemeMode } from "styles/defintions";
import {
  TokenSort,
  useGetCollectionTokensQuery,
} from "apollo/generated/queries";
import { GetServerSideProps } from "next/types";

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
  const { colorMode } = useColorMode();
  const borderColor = colorMode === ThemeMode.LIGHT ? "gray.200" : "gray.700";

  const { data, loading, refetch } = useGetCollectionTokensQuery({
    variables: {
      address: [collectionAddress || ""],
      sort: TokenSort.SortByNewest,
      buynow: true,
      isHidden: false,
      boosted: true,
      lastKey: 0,
      size: 24,
      opensea: true,
      trackTotal: null,
    },
    skip: !collectionAddress,
  });

  // logic for handling fetch more data
  // const handleFetchMore = () => {
  //   if (fetchMore)
  //     fetchMore({
  //       variables: {
  //         id: collectionId,
  //         ...queryOptions,
  //         skip: collectionTrendsData?.trendsFromCollectionId.length,
  //         limit: FETCHING_LIMIT,
  //       },
  //       updateQuery: (prev: CollectionTrendQueryData, { fetchMoreResult }) => {
  //         if (!fetchMoreResult) return prev;
  //         return {
  //           ...prev,
  //           trendsFromCollectionId: [
  //             ...prev.trendsFromCollectionId,
  //             ...fetchMoreResult.trendsFromCollectionId,
  //           ],
  //         };
  //       },
  //     });
  // };

  console.log({
    loading,
    data,
  });

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
            <Heading
              mb="0.5rem"
              size="md"
              background={themeGradient}
              css={{
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Azuki
            </Heading>
            <Flex alignItems="center" gap="1rem">
              <Text fontSize="0.75rem">Floor Price</Text>
              <Box h="1rem" w="1px" bgColor={borderColor} />
              <Text fontSize="0.75rem">Supply</Text>
            </Flex>
          </Box>
        </Flex>
        {/* body */}

        {/* flex-shrink: 0;
  margin: 2.5rem 0;
  display: grid;
  padding: 0 0.5rem 2rem;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr)); */}

        {/* "repeat(auto-fill, minmax(252px, 1fr))" */}

        <Grid
          p="1rem"
          templateColumns="repeat(auto-fill, minmax(252px, 1fr))"
          gap="1rem"
        >
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
          <GridItem w="100%" h="10" bg="pink.500" />
        </Grid>
      </Flex>
      {/* cart */}
      <Box p="1rem">Cart</Box>
    </Box>
  );
};

export default Collection;
