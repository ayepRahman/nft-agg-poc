import React from "react";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useConnect } from "wagmi";
import Image from "components/Image";
import metamaskLogo from "public/images/metamask_logo.png";
import coinbaseWalletLogo from "public/images/coinbase_logo.png";
import walletConnectLogo from "public/images/walletconnect_logo.png";
import { StaticImageData } from "next/image";

const connectorImages: { [key: string]: StaticImageData } = {
  metaMask: metamaskLogo,
  coinbaseWallet: coinbaseWalletLogo,
  walletConnect: walletConnectLogo,
};

const WalleConnectModal = () => {
  const { connect, connectors, error, isConnecting, pendingConnector } =
    useConnect();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button
        variant="outline"
        rounded="full"
        size="md"
        ref={btnRef}
        onClick={onOpen}
      >
        Connect
      </Button>

      <Modal
        isCentered
        colorScheme="pink"
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader></ModalHeader> */}
          {/* <ModalCloseButton /> */}
          <ModalBody p="2rem">
            <Flex flexDirection="column" gap="1rem">
              {connectors.map((connector, i) => {
                if (connector.id === "injected") return;

                return (
                  <div key={connector.id}>
                    <Button
                      key={connector.id}
                      w="full"
                      disabled={!connector.ready}
                      onClick={() => connect(connector)}
                      textAlign="left"
                      justifyContent="flex-start"
                      gap="1rem"
                      // padding="2rem 1rem"
                      fontSize="1rem"
                    >
                      <Image
                        // rounded="full"
                        h="1.5rem"
                        w="1.5rem"
                        src={connectorImages[connector.id].src}
                        alt={connector.id}
                      />
                      {connector.name}
                      {!connector.ready && " (unsupported)"}
                      {isConnecting &&
                        connector.id === pendingConnector?.id &&
                        " (connecting)"}
                    </Button>
                  </div>
                );
              })}
              {error && <div>{error.message}</div>}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WalleConnectModal;
