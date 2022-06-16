import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useConnect, useAccount, useDisconnect, useEnsName } from "wagmi";
import { truncateAddress } from "utils/string";

const ProfileMenu = () => {
  const { data: account, isLoading: isLoadingAccount } = useAccount();
  const { isConnected } = useConnect();
  const { data: ensname, isLoading: isLoadingEnsname } = useEnsName({
    address: account?.address,
  });
  const { disconnect } = useDisconnect();

  if (!isConnected) return null;

  return (
    <Menu>
      <MenuButton
        isLoading={isLoadingAccount || isLoadingEnsname}
        as={Button}
        variant="outline"
      >
        {ensname || truncateAddress(account?.address || "")}
      </MenuButton>
      <MenuList>
        <MenuItem>Address: {truncateAddress(account?.address || "")}</MenuItem>
        <MenuItem cursor="pointer" onClick={() => disconnect()}>
          Disconnect
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
