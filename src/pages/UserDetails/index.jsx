import React, { useEffect } from "react";
import { useHistory } from "react-router";
import {
  Flex,
  Box,
  Input,
  Img,
  Text,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useUser } from "../../hooks";
import { useUpdateProject } from "../../hooks";

const UserDetails = () => {
  const history = useHistory();
  const { user, setUserObject } = useUser();
  const toast = useToast();
  const { updateProject } = useUpdateProject();

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
      email: user.email,
    },
  });

  const submit = async (data) => {
    try {
      const details = {
        id: user.id,
        phone_number: data.phone_number,
        first_name: data.first_name,
        last_name: data.last_name,
        age: data.age,
      };

      updateProject(details);
      toast({
        title: "Saved!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUserObject({
        loading: false,
        user: {
          ...user,
          ...details,
        },
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
              <Input value={user.email} disabled placeholder="Email" />
              <Input
                type="text"
                placeholder="First Name"
                isInvalid={!!errors.first_name}
                {...register("first_name", { required: true })}
              />
              <Input
                placeholder="Last Name"
                isInvalid={!!errors.last_name}
                {...register("last_name", { required: true })}
                type="text"
              />
              <Input
                placeholder="Ages"
                isInvalid={!!errors.age}
                {...register("age", { required: true })}
                type="number"
                pattern="[0-9+]*"
              />
              <Input
                placeholder="Phone Number"
                isInvalid={!!errors.phone_number}
                {...register("phone_number", { required: true })}
                type="number"
                pattern="[0-9+]*"
              />
              <Button type="submit">SAVE CHANGES</Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Flex>
  );
};

export default UserDetails;
