import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Reset from "./Reset";

const ForgotPassword = () => {
  return (
    <Box minH="100vh" pt="15rem">
      <Container maxW="container.lg" minH="800px" bg="grey.200">
        <Header />
        <Reset />
      </Container>
    </Box>
  );
};

export default ForgotPassword;
