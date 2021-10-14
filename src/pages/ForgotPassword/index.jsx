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
import authService from "../../core/service/authService";

const ForgotPassword = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();
  const toast = useToast();

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validateEmail(value)) {
      return setError(true);
    }
    setError(false);

    // Auth.forgotPassword(value)
    authService()
      .forgetPassword(value)
      .then(() => history.push(`/resetpassword?email=${value}`))
      .catch(() =>
        toast({
          title: "User not found.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      );
  };

  return (
    <>
      <Image
        display={{ base: "none", md: "block" }}
        objectFit="contain"
        src="/assets/forgotpassword.png"
        maxW="400px"
        h="100vh"
        w="full"
      />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form noValidate onSubmit={submit}>
            <VStack px="8" spacing="5" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Text fontSize="20px" fontWeight="bold">
                Please enter the email that you used to sign in
              </Text>
              <Input
                type="email"
                isInvalid={error}
                placeholder="email"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Button type="submit" variant="red">
                Reset Password
              </Button>
              <Link to="/login">
                <Button variant="red">Log In</Button>
              </Link>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default ForgotPassword;
