import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Box, Input, Img, Text, VStack, Button } from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import { useChangePassword } from "../../hooks";
import { useUser } from "../../hooks";

const UserDetails = () => {
  const history = useHistory();
  const { changePassword, data } = useChangePassword();
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    // // Auth.currentAuthenticatedUser()
    //   // .then((user) => {
    //     changePassword({ user, data.oldPassword,data.newPassword });
    //   })
    const form = {
      user,
      oldPassword: data.oldPassword,
      newPassword: data.oldPassword,
    };
    console.log(form);
    changePassword(form, {
      onSuccess: (data) => console.log(data),
      onError: (e) => console.log(e, data),
    });

    // .then(() => history.push("/login"))
    // .catch((err) => console.log(err));
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
