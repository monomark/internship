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
import { useHistory, Link } from "react-router-dom";
import useQueryParams from "../../hooks/useQueryParams";
import authService from "../../core/service/authService";
import { useReset } from "../../hooks";

const ResetPassword = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const params = useQueryParams();
  const history = useHistory();
  const toast = useToast();
  const { reset, isLoading, data } = useReset();

  const submit = async (event) => {
    event.preventDefault();
    const username = params.get("email");

    if (!value || !value.trim()) {
      return setError(true);
    }
    if (!password || !password.trim()) {
      return setError(true);
    }
    const data = { username, value, password };

    reset(data, {
      onSuccess: () => history.push("/login"),
      onError: () =>
        toast({
          title: "InValid code or password.",
          status: "error",
          duration: 5000,
          isClosable: true,
        }),
    });
    // authService()
    //   .forgotPasswordSubmit(username, value, password)
    //   .then(() => )
    //   .catch(() =>

    //   );
  };

  return (
    <>
      <Image
        display={{ base: "none", md: "block" }}
        src="/assets/reset.png"
        objectFit="contain"
        maxW="400px"
        h="100vh"
        w="full"
      />
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
              <Button type="submit" variant="red" isLoading={isLoading}>
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
