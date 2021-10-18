import React, { useState } from "react";
import {
  Box,
  Input,
  Select,
  VStack,
  Button,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Auth, graphqlOperation, API } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
import { COUNTRIES } from "../../constats";
import { useHistory, Link } from "react-router-dom";
import authService from "../../core/service/authService";
import useSignUp from "../../hooks/auth/useSignUp";
import { useCreateUser } from "../../hooks";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { signUp, data, isLoading, error } = useSignUp();
  const { createUser, isLoading: createLoading } = useCreateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const submit = (data) => {
    try {
      const cognitoUser = signUp(data, {
        input: {
          id: cognitoUser.userSub,
          email: cognitoUser.user.username,
          phone_number: data.phone_number,
          first_name: data.first_name,
          last_name: data.last_name,
          age: data.age,
          country: data.country,
        },
        onSuccess: ({ input }) =>
          createUser(
            { input },
            {
              onSuccess: () =>
                history.push(`/verify?username=${cognitoUser.user.username}`),
              onError: (e) => console.log(e),
            }
          ),
        onError: (e) => console.log(e),
      });
    } catch (e) {
      console.log("createTodo error", e);
    }
  };

  return (
    <>
      <Image src="/assets/onlineshop.png" maxW="600px" h="100vh" w="full" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form noValidate onSubmit={handleSubmit(submit)}>
            <VStack px="8" spacing="5" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Text fontSize="3xl" fontWeight="bold">
                Register
              </Text>
              <Input
                placeholder="email"
                isInvalid={!!errors.email}
                {...register("email", { required: true })}
              />
              <Input
                placeholder="phone_number"
                isInvalid={!!errors.phone_number}
                {...register("phone_number", { required: true })}
                type="number"
                pattern="[0-9+]*"
              />
              <Input
                placeholder="first_name"
                isInvalid={!!errors.first_name}
                {...register("first_name", { required: true })}
              />
              <Input
                placeholder="last_name"
                isInvalid={!!errors.last_name}
                {...register("last_name", { required: true })}
              />
              <Input
                placeholder="age"
                isInvalid={!!errors.age}
                {...register("age", { required: true })}
                type="number"
                pattern="[0-9]*"
              />
              <Input
                placeholder="password"
                isInvalid={!!errors.password}
                {...register("password", { required: true })}
                type="password"
              />
              <Select
                placeholder="Country"
                isInvalid={!!errors.country}
                {...register("country", { required: true })}
              >
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>

              <Button isLoading={createLoading} type="submit" variant="red">
                Register
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

export default Register;
