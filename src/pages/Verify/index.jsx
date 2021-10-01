import React, { useState } from "react";
import { Input, Button, Flex, Box, VStack, Image } from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useLocation, useHistory, Link } from "react-router-dom";

const Verify = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search);
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const username = params.get("username");
    try {
      setLoading(true);
      await Auth.confirmSignUp({
        username,
        value,
      });
      history.push("/login");
    } catch (e) {
      setLoading(false);
      console.log("error confirming register", e);
    }
  };

  return (
    <>
      <Image src="/assets/mobile.png" maxW="600px" h="100vh" w="full" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onsubmit={submit}>
            <VStack px="8" spacing="5" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Input
                placeholder="write code"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Button type="submit" variant="red" isLoading={loading}>
                Verify
              </Button>
              <Link to="/register">
                <Button variant="red">Register</Button>
              </Link>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Verify;
