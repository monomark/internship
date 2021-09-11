import React from "react";
import { HStack, Box, Button, Divider, VStack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box>
      <HStack spacing="2rem" mb="1rem" pt="2rem">
        <Button fontSize="3xl">Join</Button>
        <Divider orientation="vertical" h="30px" borderColor="grey.400" />
        <Button fontSize="3xl">Sign in</Button>
      </HStack>
      <VStack mb="1rem">
        <Divider orientation="horizontal" borderColor="grey.400" w="full" />
        <Text fontSize="3xl" pt="3rem" fontWeight="700">
          Sign up with Email
        </Text>
      </VStack>
    </Box>
  );
};

export default Header;
