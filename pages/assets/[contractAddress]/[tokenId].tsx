import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Icon,
  theme,
  useColorMode,
  Text,
  Link,
  Skeleton,
} from "@chakra-ui/react";
import { themeGradient, ThemeMode } from "styles/defintions";
import { useGetTokenDetailsQuery } from "apollo/generated/queries";
import Image from "components/Image";
import Svg from "public/images/etherscan.svg";

const Token = () => {
  const router = useRouter();
  const { query } = router;
  const contractAddress = Array.isArray(query?.contractAddress)
    ? query?.contractAddress[0]
    : query?.contractAddress || "";
  const tokenId = Array.isArray(query?.tokenId)
    ? query?.tokenId[0]
    : query?.tokenId || "";
  console.log("ROUTER", router);
  const { colorMode } = useColorMode();
  const borderColor = colorMode === ThemeMode.LIGHT ? "gray.200" : "gray.700";

  const { data, loading } = useGetTokenDetailsQuery({
    variables: {
      contractAddress,
      tokenId,
    },
  });

  const token = data?.getTokenDetails;

  console.table(token);

  return (
    <Container maxW="8xl">
      <Grid
        height="calc(100vh - 73px)"
        borderX="1px"
        borderColor={borderColor}
        templateColumns="60% 40%"
      >
        <GridItem borderRight="1px" borderColor={borderColor}>
          <Flex
            p="1rem"
            borderBottom="1px"
            borderColor={borderColor}
            justifyContent="space-between"
          >
            <Box></Box>
            <Box>
              {/* <Image src={svg} alt="etherscan" /> */}
              <Icon as={Svg} w={8} h={8} color="red.500" />
            </Box>
          </Flex>
          <Flex
            w="full"
            h="full"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              maxW="30rem"
              borderRadius="md"
              src={token?.image || token?.animation_url || ""}
              alt={token?.id || ""}
            />
          </Flex>
        </GridItem>
        <GridItem p="1rem">
          <Box
            p="1rem"
            borderRadius="md"
            bgColor={theme.colors.gray[colorMode === "light" ? 100 : 700]}
          >
            <Skeleton rounded="md" isLoaded={!loading}>
              <Link
                minW="1rem"
                mb="0.5rem"
                fontSize="lg"
                fontWeight={700}
                background={themeGradient}
                css={{
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                {token?.contract_name || "mockText"}
              </Link>
            </Skeleton>
            <Skeleton rounded="md" isLoaded={!loading}>
              <Text minW="1rem" fontSize="2rem">
                {token?.name || "mockText"}
              </Text>
            </Skeleton>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Token;
