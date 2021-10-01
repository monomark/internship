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
import { useHistory, Link } from "react-router-dom";
import { useUser } from "../../hooks";

const ResetPassword = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const { userObject, setUserObject } = useUser();
  const history = useHistory();

  const submit = async (event) => {
    event.preventDefault();
    Auth.forgotPasswordSubmit({
      username: userObject.username,
      value,
      new_password: password,
    })
      .then(({ data }) => setUserObject({ user: data.getUser, loading: false }))
      .catch((e) => console.log("Invalid passsword", e));
    history.push("./login");
  };

  return (
    <>
      <Image src="/assets/reset.png" maxW="600px" h="100vh" w="full" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onsubmit={submit}>
            <VStack px="8" spacing="5" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Text fontSize="20px" fontWeight="bold">
                Please enter new password
              </Text>
              <Input
                placeholder="code"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Input
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
