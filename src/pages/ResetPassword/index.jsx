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

const ResetPassword = () => {
  const [value, setValue] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    try {
      await Auth.completeNewPassword({
        // user,
        // newPassword,
      });
    } catch (e) {
      console.log("error password", e);
    }
  };

  return (
    <>
      <Image src="/assets/reset.png" maxW="600px" h="100vh" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onsubmit={submit}>
            <VStack px="8" spacing="5">
              <Text fontSize="20px" fontWeight="bold">
                Please enter new password
              </Text>
              <Input
                placeholder="new password"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Input
                placeholder="repeat password"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Button type="submit">Submit</Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default ResetPassword;
