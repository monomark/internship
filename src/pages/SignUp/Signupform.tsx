import React from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  namesurname: string;
  password: string;
  phone: string;
};

const Signupform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent="center" pt="2rem">
        <Box>
          <Stack spacing="1.5rem">
            <FormControl>
              <FormLabel isInvalid={!!errors.email}>Email Address:</FormLabel>
              <Input
                type="email"
                {...register("email", {
                  required: true,
                })}
                bg="white"
                w="24rem"
                h="3rem"
              />
              {errors.email && <p>This field is required</p>}
            </FormControl>
            <FormControl isInvalid={!!errors.namesurname}>
              <FormLabel>Name Surname:</FormLabel>
              <Input
                type="namesurname"
                {...register("namesurname", { required: true })}
                bg="white"
                w="24rem"
                h="3rem"
              />
              {errors.namesurname && <p>This field is required</p>}
            </FormControl>
            <FormControl>
              <FormLabel>Password:</FormLabel>
              <Input
                isInvalid={!!errors.password}
                type="password"
                {...register("password", { required: true })}
                bg="white"
                w="24rem"
                h="3rem"
              />
              {errors.password && <p>This field is required</p>}
            </FormControl>
            <FormControl isInvalid={!!errors.phone}>
              <FormLabel>Phone:</FormLabel>
              <Input
                type="phone"
                {...register("phone", { required: true })}
                bg="white"
                w="24rem"
                h="3rem"
              />
              {errors.phone && <p>This field is required</p>}
            </FormControl>
          </Stack>
          <Button mx="5rem" type="submit" variant="pink" mt="3rem" mb="3rem">
            join
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default Signupform;
