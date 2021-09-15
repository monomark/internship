import React from "react";
import { HStack, Box, Button, Divider, VStack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box justifyContent="space-between">
      <HStack spacing="2rem" mb="1rem" pt="2rem">
        <Button fontSize="3xl">Join</Button>
        <Divider orientation="vertical" h="37px" borderColor="#000" />
        <Button fontSize="3xl">Sign in</Button>
      </HStack>
      <VStack mb="2rem" spacing="3rem">
        <Divider orientation="horizontal" borderColor="#000" w="full" />
        <Text fontSize="3xl" fontWeight="700">
          Sign up with Email
        </Text>
      </VStack>
    </Box>
  );
};

export default Header;
