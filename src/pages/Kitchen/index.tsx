import { Flex, Container, Box } from "@chakra-ui/react";
import Buttons from "./Button";
import PicLine1 from "./Pic_line1";
import Header from "./Header";

const Kitchen = () => {
  return (
    <Container maxW="6xl">
      <Header />
      <Buttons />
      <Box pt="16">
        <Flex alignItems="center" justifyContent="space-between">
          <PicLine1 />
        </Flex>
      </Box>
    </Container>
  );
};

export default Kitchen;
