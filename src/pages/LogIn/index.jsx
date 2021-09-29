import React from "react";
import {
  VStack,
  Input,
  Text,
  Button,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Auth, graphqlOperation, API } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import { Link } from "react-router-dom";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async (data) => {
    try {
      const cognitoUser = await Auth.signIn({
        username: data.email.toLowerCase(),
        password: data.password,
      });

      const input = {
        email: cognitoUser.user.username,
        password: data.password,
      };
      await API.graphql(graphqlOperation(getUser, { input }));
    } catch (e) {
      console.log("error signing in", e);
    }
  };

  return (
    <>
      <Image src="/assets/buy1.png" maxW="600px" h="100vh" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form noValidate onsubmit={handleSubmit(submit)}>
            <VStack spacing="5" px="8">
              <Text fontSize="3xl" fontWeight="bold">
                Log In
              </Text>
              <Input
                placeholder="email"
                isInvalid={!!errors.email}
                {...register("email", { required: true })}
              />
              <Input
                placeholder="password"
                isInvalid={!!errors.password}
                {...register("password", { required: true })}
              />
              <Button type="submit">Log In</Button>
              <Link to="/forgotpassword">
                <Button variant="ghost">Forgotten password?</Button>
              </Link>
              <Link to="/register">
                <Button>Create New Account</Button>
              </Link>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default LogIn;
