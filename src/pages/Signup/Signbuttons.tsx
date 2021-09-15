import React from "react";
import { Flex, HStack, Divider, Center, Button } from "@chakra-ui/react";

const Signbuttons = () => {
  return (
    <Flex justifyContent="center" pt="2.1rem" pb="2.3rem">
      <HStack spacing="5.6rem">
        <Button variant="transparent" color="500" size="sm">
          Join
        </Button>
        <Center height="2.3rem" bg="300">
          <Divider orientation="vertical" border="1px" />
        </Center>
        <Button color="400" variant="transparent" size="sm">
          Sign in
        </Button>
      </HStack>
    </Flex>
  );
};

export default Signbuttons;
