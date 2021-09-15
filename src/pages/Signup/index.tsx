import React from "react";
import { Box, Container, Divider } from "@chakra-ui/react";
import Signbuttons from "./Signbuttons";
import Signupform from "./Signupform";
import Signupwith from "./Signupwith";

const Signup = () => {
  return (
    <Box w="full" minH="100vh" p="9.4rem">
      <Container w="full" maxW="36rem" bg="700" p="3rem">
        <Box bg="600" px="3.7rem">
          <Signbuttons />
          <Divider width="full" borderColor="#000" mb="4" />
          <Signupwith />
          <Signupform />
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
