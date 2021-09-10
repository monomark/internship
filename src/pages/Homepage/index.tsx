import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Header } from "./Header";
import Catalog from "./Catalog";

const Homepage = () => {
  return (
    <Box w="full" minH="100vh" bg="#3B3B3B">
      <Container maxW="7xl">
        <Header />
        <Catalog />
      </Container>
    </Box>
  );
};

export default Homepage;
