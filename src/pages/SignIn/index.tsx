import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import SignIn from "./SignIn";
import Buttonicon from "./Buttonicon";

const SignInContent = () => {
  return (
    <Box minH="100vh" pt="10rem">
      <Container bg="grey.100" p="3rem">
        <Box bg="grey.200" p="2rem" minH="1100px">
          <Header />
          <SignIn />
          <Buttonicon />
        </Box>
      </Container>
    </Box>
  );
};

export default SignInContent;
