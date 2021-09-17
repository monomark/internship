import React from "react";
import { Flex, HStack, Divider, Center, Button } from "@chakra-ui/react";

const Signbuttons = () => {
  return (
    <Flex justifyContent="center" pt="2.1rem" pb="2.3rem">
      <HStack spacing="5.6rem">
        <Button variant="transparent" size="sm">
          Join
        </Button>
        <Center height="2.3rem" borderColor="#000">
          <Divider orientation="vertical" border="1px" />
        </Center>
        <Button variant="transparent" size="sm">
          Sign in
        </Button>
      </HStack>
    </Flex>
  );
};

export default Signbuttons;
