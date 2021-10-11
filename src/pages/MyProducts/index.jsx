import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import CreatedProducts from "./CreatedProducts";

const MyProducts = () => {
  return (
    <>
      <Text fontSize="30px" textAlign="center">
        My Products
      </Text>
      <Flex minH="100vh" w="full" m="5">
        <CreatedProducts />
      </Flex>
    </>
  );
};

export default MyProducts;
