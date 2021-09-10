import React from "react";
import { Box, Container, Divider, Button } from "@chakra-ui/react";
import Signbuttons from "./Signbuttons";
import Signupform from "./Signupform";
import Signupwith from "./Signupwith";

const Signup = () => {
  return (
    <Box w="full" minH="100vh" p="150px">
      <Container w="full" maxW="36rem" bg="#C4C4C4" p="3rem">
        <Box bg="#E5E5E5" px="60px">
          <Signbuttons />
          <Divider width="full" borderColor="#000" mb="4" />
          <Signupwith />
          <Signupform />
          <Button m="20" variant="pink" mt="2rem" mb="8rem">
            join
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
