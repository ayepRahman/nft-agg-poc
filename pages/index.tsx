import { useState } from "react";
import { useSearchCollectionsQuery } from "apollo/generated/queries";
import { FaSearch, FaTimes } from "react-icons/fa";
import type { NextPage } from "next";
import { uniqBy } from "lodash";
// import Head from "next/head";
// import Image from "next/image";
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
  theme,
} from "@chakra-ui/react";
import { useDebounce } from "hooks/useDebounce";
import BounceLoader from "react-spinners/BounceLoader";
import { useRouter } from "next/router";
import { themeGradient } from "styles/defintions";

const Home: NextPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceSearchTerm = useDebounce(searchTerm, 300);
  const { colorMode } = useColorMode();

  const { data, loading } = useSearchCollectionsQuery({
    variables: {
      searchTerm: debounceSearchTerm,
      topSupply: true,
      size: 1,
    },
    skip: !debounceSearchTerm,
  });

  const collections = uniqBy(data?.searchCollections ?? [], "address");

  return (
    <Container maxWidth="xl">
      <Box mt="30vh">
        <Heading
          textAlign="center"
          mb="3"
          size="2xl"
          background={themeGradient}
          css={{
            "text-fill-color": "transparent",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          The NFT Aggregator
        </Heading>
        <Box>
          <InputGroup colorScheme="pink">
            <Input
              colorScheme="pink"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search collection by name or address"
            />
            {searchTerm ? (
              <InputRightElement
                cursor="pointer"
                onClick={() => setSearchTerm("")}
              >
                <FaTimes />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <FaSearch />
              </InputRightElement>
            )}
          </InputGroup>
        </Box>

        {loading ? (
          <Box
            mt="0.5rem"
            border="1px"
            borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="0.5rem"
          >
            <BounceLoader
              color={theme.colors.gray[500]}
              loading={true}
              size={16}
            />
          </Box>
        ) : (
          <>
            {(loading || collections.length > 0) && !!searchTerm && (
              <Box
                mt="0.5rem"
                border="1px"
                borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {loading && !data && (
                  <Box padding="1rem" w="full" h="100%" textAlign="center">
                    <BounceLoader color="cyan" loading={loading} size={16} />
                  </Box>
                )}
                {collections.length > 0 && (
                  <Box w="full" overflow="hidden" position="relative">
                    {collections?.map((c, i) => {
                      return (
                        <Flex
                          onClick={() =>
                            router.push(`/collections/${c?.address}`)
                          }
                          borderRadius="md"
                          padding="0.5rem 1rem"
                          key={`collection-${i}`}
                          justifyContent="space-between"
                          _hover={{
                            cursor: "pointer",
                            bgColor:
                              colorMode === "light" ? "gray.100" : "gray.700",
                          }}
                        >
                          <Flex gap="1rem">
                            {/* <Image /> */}
                            {c?.name}
                          </Flex>
                          <Box>{c?.total_supply}</Box>
                        </Flex>
                      );
                    })}
                  </Box>
                )}
              </Box>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
