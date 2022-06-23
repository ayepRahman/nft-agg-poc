import { useState } from "react";
import { useSearchCollectionsQuery } from "apollo/generated/queries";
import { FaSearch, FaTimes } from "react-icons/fa";
import type { NextPage } from "next";
import { uniqBy } from "lodash";
// import Head from "next/head";
// import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
  theme,
  Text,
} from "@chakra-ui/react";
import { useDebounce } from "hooks/useDebounce";
import BounceLoader from "react-spinners/BounceLoader";
import { useRouter } from "next/router";
import { themeGradient } from "styles/defintions";
import Image from "components/Image";
import heroImg from "public/images/nfts_hero.png";
import Head from "next/head";

const Home: NextPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceSearchTerm = useDebounce(searchTerm, 300);
  const { colorMode } = useColorMode();

  const { data, loading } = useSearchCollectionsQuery({
    variables: {
      searchTerm: debounceSearchTerm,
      limit: 10,
      sortBy: "volume",
      period: "week",
    },
    skip: !debounceSearchTerm,
  });

  const collections = uniqBy(data?.searchCollections ?? [], "address");

  return (
    <>
      <Head>
        <meta title="home page" />
      </Head>
      <Flex height="calc(100vh - 73px)" w="full" position="relative">
        <Box
          top="10vh"
          bg="radial-gradient(45.5% 47.88% at 45% 50.47%, rgb(255, 0, 199) 0%, rgba(0, 0, 0, 0) 100%)"
          position="absolute"
          width="50%"
          right="0"
        >
          <Image
            src={heroImg.src}
            alt="hero"
            layout="responsive"
            height="100%"
            width="100%"
          />
        </Box>

        <Box
          ml="10vw"
          height="full"
          display="flex"
          flexDir="column"
          justifyContent="center"
          maxWidth="xl"
          padding="1rem"
        >
          <Box mt="">
            <Heading
              textAlign="left"
              mb="3rem"
              fontSize="clamp(3.5rem, 8vw, 6rem)"
              lineHeight="clamp(3.5rem, 8vw, 6rem)"
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
                    borderColor={
                      colorMode === "light" ? "gray.200" : "gray.700"
                    }
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {loading && !data && (
                      <Box padding="1rem" w="full" h="100%" textAlign="center">
                        <BounceLoader
                          color="cyan"
                          loading={loading}
                          size={16}
                        />
                      </Box>
                    )}
                    {collections.length > 0 && (
                      <Box w="full" overflow="hidden" position="relative">
                        {collections?.map((c, i) => {
                          console.log("collection", c);
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
                                  colorMode === "light"
                                    ? "gray.100"
                                    : "gray.700",
                              }}
                            >
                              <Flex gap="0.5rem" alignItems="center">
                                <Image
                                  overflow="hidden"
                                  alignSelf="center"
                                  height="32px"
                                  width="32px"
                                  alt={c?.store_id || ""}
                                  src={
                                    c?.info?.cover_image ||
                                    c?.info?.bg_image ||
                                    ""
                                  }
                                />
                                <Text>{c?.name}</Text>
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
        </Box>
      </Flex>
    </>
  );
};

export default Home;
