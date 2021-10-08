import React from "react";
import { useHistory } from "react-router";
import { Flex, Box, Input, Img, Text, VStack, Button } from "@chakra-ui/react";
import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import { useForm } from "react-hook-form";
import { useUser } from "../../hooks";

const UserDetails = () => {
  const history = useHistory();
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      phone_number: user.phone_number,
      // email: user.email,
    },
  });

  const submit = async (data) => {
    try {
      const details = {
        // email: data.email,
        phone_number: data.phone_number,
        first_name: data.first_name,
        last_name: data.last_name,
        age: data.age,
      };

      await API.graphql({
        query: mutations.updateUser,
        variables: { input: details },
      });
      history.push("/profile");
    } catch (e) {
      console.log(e, "change   error ");
    }
  };

  return (
    <Flex justifyContent="center" pt="3rem" mb="1rem">
      <Box w="500px">
        <VStack color="red.300" spacing="2rem">
          <Img src="/assets/user.png" alt="user" />
          <Text fontSize="4xl">My Details</Text>
          <Text fontSize="2xl">
            Feel free edit any of your details below so your account is totally
            up to date.
          </Text>
          <form noValidate onSubmit={handleSubmit(submit)}>
            <VStack px="8" spacing="5">
              <Input
                // defaultValue={user.first_name}
                type="text"
                placeholder="FirstName"
                isInvalid={!!errors.first_name}
                {...register("first_name", { required: true })}
              />
              <Input
                placeholder="lastName"
                isInvalid={!!errors.last_name}
                {...register("last_name", { required: true })}
                type="text"
              />
              <Input
                placeholder="age"
                isInvalid={!!errors.age}
                {...register("age", { required: true })}
                type="number"
                pattern="[0-9+]*"
              />
              <Input
                placeholder="phoneNumber"
                isInvalid={!!errors.phone_number}
                {...register("phone_number", { required: true })}
                type="number"
                pattern="[0-9+]*"
              />
              {/* <Input
                placeholder="Email"
                isInvalid={!!errors.email}
                {...register("email", { required: true })}
                type="text"
              /> */}

              <Button type="submit">SAVE CHANGES</Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Flex>
  );
};

export default UserDetails;
