import React from "react";
import { Flex, HStack, Divider, Center, Button } from "@chakra-ui/react";

const Signbuttons = () => {
  return (
    <Flex justifyContent="center" pt="35px" pb="38px">
      <HStack spacing="90px">
        <Button variant="transparent" color="#3C3C3C" size="sm">
          Join
        </Button>
        <Center height="37px" bg="#000000">
          <Divider orientation="vertical" border="1px" />
        </Center>
        <Button color="#616161" variant="transparent" size="sm">
          Sign in
        </Button>
      </HStack>
    </Flex>
  );
};

export default Signbuttons;
