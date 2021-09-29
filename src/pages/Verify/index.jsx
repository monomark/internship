import React, { useState } from "react";
import { Input, Button, Flex, Box, VStack, Image } from "@chakra-ui/react";
import { Auth } from "aws-amplify";

const Verify = () => {
  const [value, setValue] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp({
        value,
      });
    } catch (e) {
      console.log("error confirming register", e);
    }
  };

  return (
    <>
      <Image src="/assets/mobile.png" maxW="600px" h="100vh" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onsubmit={submit}>
            <VStack px="8" spacing="5">
              <Input
                placeholder="write code"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Button>Verify</Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Verify;
