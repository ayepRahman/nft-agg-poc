import React from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { ThemeMode } from "styles/defintions";
import { Flex, useColorMode, Box, theme } from "@chakra-ui/react";
import WalleConnectModal from "components/WalletDrawerButton";
import { useConnect } from "wagmi";
import ProfileMenu from "components/ProfileMenu";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isConnected } = useConnect({});

  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      px="3"
      py="4"
      borderBottom="1px"
      borderColor={colorMode === ThemeMode.LIGHT ? "gray.200" : "gray.700"}
    >
      <Flex alignItems="center" gap="1rem">
        {!isConnected ? <WalleConnectModal /> : <ProfileMenu />}
        <Box cursor="pointer" onClick={() => toggleColorMode()}>
          {colorMode === ThemeMode.LIGHT ? (
            <FaRegMoon size="24px" color={theme.colors.pink[600]} />
          ) : (
            <FaSun size="24px" color={theme.colors.pink[600]} />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
