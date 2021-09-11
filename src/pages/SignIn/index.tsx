import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Inputs from "./Inputs";
import Buttonicon from "./Buttonicon";

const index = () => {
  return (
    <Box minH="100vh" pt="10rem">
      <Container
        maxW="580px"
        bg="grey.100"
        p="3rem"
        width={{
          base: "300px",
          sm: "500px",
          md: "700px",
          lg: "800px",
          xl: "1600px",
        }}
      >
        <Box bg="grey.200" p="2rem" minH="1100px">
          <Header />
          <Inputs />
          <Buttonicon />
        </Box>
      </Container>
    </Box>
  );
};

export default index;
