import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig, createClient } from "wagmi";
import type { AppProps } from "next/app";
import { getApolloClient } from "apollo/client";
import Layout from "components/Layout";
import { theme } from "styles";
import { wagmiClient } from "config/wagmi";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = getApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <WagmiConfig client={wagmiClient}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </WagmiConfig>
    </ApolloProvider>
  );
}

export default MyApp;
