import React from "react";
import { convertImgUrl } from "utils/image";
import {
  Box,
  theme,
  Image,
  Skeleton,
  useColorMode,
  Flex,
  Text,
} from "@chakra-ui/react";
import { TokenCardProps } from "./interface";
import { FaEthereum } from "react-icons/fa";
import mintableLogo from "public/images/mintable_logo.jpeg";
import openSeaLogo from "public/images/opensea_logo.png";

const isEven = (value: number) => value % 2 === 0;

const TokenCard: React.FC<TokenCardProps> = ({
  token,
  isSelected,
  onClick,
  isLoading,
}) => {
  const { colorMode } = useColorMode();
  const imgUrl = convertImgUrl(token?.animation_url || token?.image || "");
  const marketImgSrc = isEven(Number(token?.token_id))
    ? mintableLogo
    : openSeaLogo;
  const title =
    token?.symbol && token?.token_id
      ? `${token?.symbol} #${token?.token_id}`
      : token?.name;
  const priceInEth = token?.opensea_order?.starting_price_eth ?? null;

  const getCardBoxShadow = () => {
    return !isSelected
      ? `0 0 0 3px transparent, 0 2px 8px ${
          theme.colors.gray[colorMode === "light" ? 300 : 700]
        }`
      : `0 0 0 3px ${theme.colors.pink[colorMode === "light" ? 400 : 600]}`;
  };
  const getOnHoverCardBoxShadow = () => {
    return !isSelected
      ? `0 0 0 3px transparent, 0 2px 8px ${
          theme.colors.gray[colorMode === "light" ? 400 : 600]
        }`
      : ``;
  };

  return (
    <Box
      overflow="hidden"
      onClick={onClick}
      borderRadius="12px"
      w="full"
      boxShadow={getCardBoxShadow()}
      css={{
        "&:hover": {
          boxShadow: getOnHoverCardBoxShadow(),
          cursor: "pointer",
        },
      }}
    >
      <Box w="full" position="relative">
        <Skeleton isLoaded={!isLoading}>
          {/* brand logo */}
          <Image
            position="absolute"
            top="0.5rem"
            left="0.5rem"
            borderRadius="full"
            boxSize="2rem"
            src={marketImgSrc.src}
            alt="adas"
          />
          {/* select icon */}
          {/* ranking */}
          <Image
            height="auto"
            w="100%"
            maxW="100%"
            src={isLoading ? mintableLogo.src : imgUrl}
            alt={token.address || ""}
          />
        </Skeleton>
      </Box>
      <Box p="0.5rem">
        <Flex w="full" mb="0.5rem" alignItems="center">
          <Skeleton borderRadius="md" isLoaded={!isLoading}>
            <Text fontSize="14px">{isLoading ? "mocktext" : title}</Text>
          </Skeleton>
        </Flex>
        <Flex w="full" justifyContent="space-between">
          <Skeleton borderRadius="md" isLoaded={!isLoading}>
            <Text
              display="flex"
              alignItems="center"
              fontSize="14px"
              lineHeight="14px"
            >
              {isLoading ? "mocktext" : priceInEth} <FaEthereum size={12} />
            </Text>
          </Skeleton>
        </Flex>
      </Box>
    </Box>
  );
};

export default TokenCard;
