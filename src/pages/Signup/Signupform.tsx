import React from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  email: string;
  namesurname: string;
  password: string;
  phone: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have a correct format")
    .required("This field is required"),
  namesurname: yup.string().required("This field is required"),
  password: yup.string().required("This field is required "),
  phone: yup.string().required("This field is required"),
});

const Signupform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur", resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent="space-between" pt="5rem">
        <Box>
          <Stack spacing="5rem">
            <FormControl isInvalid={!!errors?.email?.message}>
              <FormLabel>Email Address:</FormLabel>
              <Input
                type="email"
                {...register("email", {
                  required: true,
                })}
                bg="200"
                w="24rem"
                h="3rem"
              />
              {errors.email && (
                <Text variant="error">{errors.email.message}</Text>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors?.namesurname?.message}>
              <FormLabel>Name Surname:</FormLabel>
              <Input
                type="namesurname"
                {...register("namesurname", { required: true })}
                bg="200"
                w="24rem"
                h="3rem"
              />
              {errors.namesurname && (
                <Text variant="error">{errors.namesurname.message}</Text>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors?.password?.message}>
              <FormLabel>Password:</FormLabel>
              <Input
                type="password"
                {...register("password", { required: true })}
                bg="200"
                w="24rem"
                h="3rem"
              />
              {errors.password && (
                <Text variant="error">{errors.password.message}</Text>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors?.phone?.message}>
              <FormLabel>Phone:</FormLabel>
              <Input
                type="phone"
                {...register("phone", { required: true })}
                bg="200"
                w="24rem"
                h="3rem"
              />
              {errors.phone && (
                <Text variant="error">{errors.phone.message}</Text>
              )}
            </FormControl>
          </Stack>
          <Button mx="5rem" type="submit" variant="pink" mt="5rem" mb="8rem">
            join
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default Signupform;
