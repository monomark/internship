import {
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Box,
  Container,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Catalog = () => {
  return (
    <Flex
      justifyContent="center"
      minH="100vh"
      style={{
        minHeight: "calc(100vh - 98px)",
      }}
    >
      <Flex justifyContent="space-between" align="center" flex="1">
        <Stack spacing={8}>
          <Heading as="h1" fontSize="15px">
            Your dream
            <br />
            interior design
          </Heading>
          <Text fontSize="xl">
            Here you can order
            <br />
            any type of furniture
            <br />
            or create it youreself
          </Text>
          <Button
            mt="10px"
            w="200px"
            bg="linear-gradient(88.21deg, #F72A80 9.41%, rgba(173, 11, 230, 0.5) 120.3%)"
          >
            View catalog
          </Button>
        </Stack>
        <Image src="/assets/mebel.png" alt="mebel" w="600px" h="400px" />
      </Flex>
    </Flex>
  );
};

export default Catalog;
