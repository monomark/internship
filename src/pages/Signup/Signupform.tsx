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
  phone: number;
};

const Signupform = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent="space-between" pt="80px">
        <Box>
          <Stack spacing="5rem">
            <FormControl id="email">
              <FormLabel>Email Address:</FormLabel>
              <Input
                type="email"
                {...(register("email"), { required: true })}
                bg="#FFFFFF"
                w="380px"
                h="45px"
              />
            </FormControl>
            <FormControl id="namesurname">
              <FormLabel>Name Surname:</FormLabel>
              <Input
                type="namesurname"
                defaultValue="fgh"
                {...(register("namesurname"), { required: true })}
                bg="#FFFFFF"
                w="380px"
                h="45px"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password:</FormLabel>
              <Input
                type="password"
                {...(register("password"), { required: true })}
                bg="#FFFFFF"
                w="380px"
                h="45px"
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone:</FormLabel>
              <Input
                type="phone"
                {...(register("phone"), { required: true })}
                bg="#FFFFFF"
                w="380px"
                h="45px"
              />
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
