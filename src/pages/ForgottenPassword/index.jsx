import React, { useState } from "react";
import {
  Flex,
  Box,
  VStack,
  Input,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";

const ForgottenPassword = () => {
  const [value, setValue] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    try {
      await Auth.forgotPassword();
    } catch (e) {
      console.log("forgot password", e);
    }
  };

  return (
    <>
      <Image src="/assets/forgotpassword.png" maxW="600px" h="100vh" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onsubmit={submit}>
            <VStack px="8" spacing="5">
              <Text fontSize="20px" fontWeight="bold">
                Please enter the email that you used to sign in
              </Text>
              <Input
                placeholder="email"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Button type="submit">Reset Password</Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default ForgottenPassword;
