import { Flex, Container, Box, Stack } from "@chakra-ui/react";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Pics from "./Pics";
import Pics2 from "./Pics2";
import Pics3 from "./Pics3";
import Header from "./Header";

const Catalogue = () => {
  return (
    <Container maxW="6xl">
      <Header />
      <Buttons />
      <Box pt="16">
        <Flex alignItems="center" justifyContent="space-between">
          <Pics />
          <Pics2 />
          <Pics3 />
        </Flex>
      </Box>s
      <Footer />
    </Container>
  );
};

export default Catalogue;
