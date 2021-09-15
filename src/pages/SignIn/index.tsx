import React from "react";
import { Flex, Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import SignInContent from "./SignInContent";
import Buttonicon from "./Buttonicon";

const SignIn = () => {
  return (
    <Flex
      align="center"
      justifyContent="center"
      minH="100vh" py="8">
      <Container bg="grey.100" p="3rem">
        <Box bg="grey.200" p="2rem">
          <Header />
          <SignInContent />
          <Buttonicon />
        </Box>
      </Container>
    </Flex>
  );
};

export default SignIn;
