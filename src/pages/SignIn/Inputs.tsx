import React from "react";
import { VStack, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";

const Inputs = () => {
  return (
    <Flex justifyContent="center" pt="2rem">
      <VStack>
        <FormControl id="email">
          <FormLabel>EMAIL ADRESS:</FormLabel>
          <Input type="email" w="330px" h="60px" bg="grey.300" mb="1.5rem" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>PASSWORD:</FormLabel>
          <Input type="password" bg="grey.300" h="60px" />
        </FormControl>
      </VStack>
    </Flex>
  );
};

export default Inputs;
