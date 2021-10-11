import React from "react";
import { Text, Flex, VStack, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks";

const UserInfo = () => {
  const { user, loading, exact } = useUser();
  return (
    <Flex justifyContent="center" maxW="100vh">
      <VStack spacing={10}>
        <HStack spacing={4} color="pink.500" fontSize="6xl">
          <Text> Hi,</Text>
          <Text> {user.first_name}</Text>
          <Text>{user.last_name}</Text>
        </HStack>
        <Link to="/userdetails">
          <Button variant="pink" w="410px">
            My details
          </Button>
        </Link>
        <Link to="/orders">
          <Button variant="pink" w="410px">
            My orders
          </Button>
        </Link>
        <Link to="/changepassword">
          <Button variant="pink" w="410px">
            Change password
          </Button>
        </Link>

        <Link to="/paymentmethods">
          <Button variant="pink" w="410px">
            Payment methods
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
};

export default UserInfo;
