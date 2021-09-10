import React from "react";
import { Stack, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";

const Signupform = () => {
  return (
    <Flex justifyContent="space-between" pt="80px">
      <Stack spacing="5rem">
        <FormControl id="email">
          <FormLabel>Email Address:</FormLabel>
          <Input type="email" bg="#FFFFFF" w="380px" h="45px" />
        </FormControl>
        <FormControl id="name-surname">
          <FormLabel>Name Surname:</FormLabel>
          <Input type="name-surname" bg="#FFFFFF" w="380px" h="45px" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password:</FormLabel>
          <Input type="password" bg="#FFFFFF" w="380px" h="45px" />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone:</FormLabel>
          <Input type="phone" bg="#FFFFFF" w="380px" h="45px" />
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Signupform;
