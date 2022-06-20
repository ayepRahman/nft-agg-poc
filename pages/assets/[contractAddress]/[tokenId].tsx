import React from "react";
import { useRouter } from "next/router";
import { Container, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { ThemeMode } from "styles/defintions";

const Token = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const borderColor = colorMode === ThemeMode.LIGHT ? "gray.200" : "gray.700";

  console.log("ROUTER", router);

  return (
    <Container maxW="8xl">
      <Grid
        height="calc(100vh - 73px)"
        borderX="1px"
        borderColor={borderColor}
        templateColumns="60% 40%"
      >
        <GridItem borderRight="1px" borderColor={borderColor}>
          60%
        </GridItem>
        <GridItem>40%</GridItem>
      </Grid>
    </Container>
  );
};

export default Token;
