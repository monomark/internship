import React from "react";
// import { } from "react-router-dom";
import {
  Link,
  Box,
  Flex,
  Button,
  Divider,
  VStack,
  Text,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" pt="3rem" mb="1rem">
        <Button fontSize="3xl">Join</Button>
        <Divider orientation="vertical" h="37px" borderColor="#000" />
        <Link href="/sign-in">
          <Button fontSize="3xl">Sign in</Button>
        </Link>
      </Flex>

      <VStack mb="2rem" spacing="5rem">
        <Divider orientation="horizontal" borderColor="#000" w="full" />
        <Text fontSize="3xl" fontWeight="700">
          RESET YOUR PASSWORD
        </Text>
        <Text fontSize="xl" fontWeight="600">
          Type in your email addres below and we'll send you an email with
          <br /> instructions on how to create a new password
        </Text>
      </VStack>
    </Box>
  );
};

export default Header;
