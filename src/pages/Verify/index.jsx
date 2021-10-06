import React, { useState } from "react";
import { Input, Button, Flex, Box, VStack, Image } from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useLocation, useHistory, Link } from "react-router-dom";

const Verify = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const [error, setError] = useState(false);
  const params = new URLSearchParams(useLocation().search);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const submit = async (event) => {
    event.preventDefault();

    const username = "zemhayko9@list.ru";
    try {
      setLoading(true);
      await Auth.confirmSignUp(username, value);
      history.push("/login");
    } catch (e) {
      setLoading(false);
      setError(true);
      console.log("error confirming register", e);
    }
  };

  return (
    <>
      <Image src="/assets/mobile.png" maxW="600px" h="100vh" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onSubmit={submit}>
            <VStack px="8" spacing="5">
              <Input
                placeholder="write code"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Button type="submit">Verify</Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Verify;
