import React from "react";
import { HStack, Flex, Box, Button, Divider, VStack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="space">
        <Flex justifyContent="center" marginRight="-1px"  borderRight="2px solid #000" flex="1">
          <Button fontSize="2xl">Join</Button>
        </Flex>
        <Flex justifyContent="center" marginLeft="-1px" borderLeft="2px solid #000" flex="1">
          <Button fontSize="2xl">Sign in</Button>
        </Flex>
      </Flex>
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
