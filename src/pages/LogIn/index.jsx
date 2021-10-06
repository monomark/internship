import React, { useState } from "react";
import {
  VStack,
  Input,
  Text,
  Button,
  Box,
  Flex,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../hooks";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUserObject } = useUser();

  const history = useHistory();
  const toast = useToast();

  const submit = async (form) => {
    try {
      setLoading(true);
      const cognitoUser = await Auth.signIn({
        username: form.email.toLowerCase(),
        password: form.password,
      });

      const { data } = await API.graphql(
        graphqlOperation(getUser, { id: cognitoUser.username })
      );
      setUserObject({ user: data.getUser, loading: false });
      history.push("/");
    } catch (e) {
      setLoading(false);
      console.log("error signing in", e);
      toast({
        title: "User not found.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Image display={{base: 'none', md: 'block'}} objectFit="contain" src="/assets/buy1.png" maxW="400px" h="100vh" w="full" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form noValidate onSubmit={handleSubmit(submit)}>
            <VStack spacing="5" px="8" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Text fontSize="3xl" fontWeight="bold">
                Log In
              </Text>
              <Input
                placeholder="email"
                isInvalid={!!errors.email}
                {...register("email", { required: true })}
              />

              <Input
                type="password"
                placeholder="password"
                isInvalid={!!errors.password}
                {...register("password", { required: true })}
              />
              <Button isLoading={loading} type="submit" variant="red">
                Log In
              </Button>
              <Link to="/forgotpassword">
                <Button>Forgot password?</Button>
              </Link>
              <Link to="/register">
                <Button variant="red">Create New Account</Button>
              </Link>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
