import React, { useState } from "react";
import {
  Flex,
  Box,
  VStack,
  Input,
  Button,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useHistory, Link, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const params = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const toast = useToast();

  const submit = async (event) => {
    event.preventDefault();
    const username = params.get("email");

    if (!value || !value.trim()) {
      return setError(true);
    }
    if (!password || !password.trim()) {
      return setError(true);
    }
    Auth.forgotPasswordSubmit(username, value, password)
      .then(() => history.push("/login"))
      .catch(() =>
        toast({
          title: "InValid code or password.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      );
  };

  return (
    <>
      <Image src="/assets/reset.png" maxW="600px" h="100vh" w="full" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onSubmit={submit}>
            <VStack px="8" spacing="5" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Text fontSize="20px" fontWeight="bold">
                Please enter new password
              </Text>
              <Input
                isInvalid={error}
                placeholder="code"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Input
                isInvalid={error}
                type="password"
                placeholder="new password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button type="submit" variant="red">
                Submit
              </Button>
              <Link to="/forgotpassword">
                <Button>forgotPassword?</Button>
              </Link>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default ResetPassword;
