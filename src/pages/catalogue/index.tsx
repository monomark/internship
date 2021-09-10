import { Flex, Container, Box, Stack } from "@chakra-ui/react";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Pics from "./Pics";
import Pics2 from "./Pics2";
import Pics3 from "./Pics3";
import Header from "./Header";

const Catalogue = () => {
  return (
    <Box>
      <Header />

      <Buttons />
      <Container pt="60px" maxW="6xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Pics />
          <Pics2 />
          <Pics3 />
        </Flex>
      </Container>

      <Footer />
    </Box>
  );
};

export default Catalogue;
