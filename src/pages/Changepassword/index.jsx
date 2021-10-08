import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Flex,
  Box,
  Input,
  Img,
  Text,
  VStack,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";

const UserDetails = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(user, data.oldPassword, data.newPassword);
      })
      .then(() => history.push("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <Flex justifyContent="center" pt="3rem" mb="1rem">
      <Box w="500px">
        <VStack color="red.300" spacing="2rem">
          <Img src="/assets/pad.png" alt="pad" />
          <Text fontSize="4xl">CHANGE PASSWORD</Text>
          <Text fontSize="2xl">
            Feel free to update your password so your account stays secure.
          </Text>
          <form noValidate onSubmit={handleSubmit(submit)}>
            <VStack px="8" spacing="5">
              <Input
                type="password"
                placeholder="oldPassword"
                isInvalid={!!errors.oldPassword}
                {...register("oldPassword", { required: true })}
              />
              <Input
                placeholder="newPassword"
                isInvalid={!!errors.newPassword}
                {...register("newPassword", { required: true })}
                type="password"
                pattern="[0-9+]*"
              />

              <Button type="submit">Register</Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Flex>
  );
};

export default UserDetails;
