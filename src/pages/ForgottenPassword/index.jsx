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
import { useUser } from "../../hooks";
import { useHistory, Link } from "react-router-dom";

const ForgottenPassword = () => {
  const [value, setValue] = useState("");
  const { userObject } = useUser();
  const history = useHistory();
  console.log(userObject);

  const submit = async (event) => {
    event.preventDefault();
    Auth.forgotPassword({ username: userObject.username })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    history.push("/resetpassword");
  };

  return (
    <>
      <Image src="/assets/forgotpassword.png" maxW="600px" h="100vh" w="full" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onsubmit={submit}>
            <VStack px="8" spacing="5" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Text fontSize="20px" fontWeight="bold">
                Please enter the email that you used to sign in
              </Text>
              <Input
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

export default ForgottenPassword;
