import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";

type FormValues = {
  email: string;
  password: string | number;
};

function SignInContent() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Flex justifyContent="center" pt="2rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="1.5rem">
          <FormControl
                       isInvalid={!!errors.email}
                       >
            <FormLabel>EMAIL ADRESS:</FormLabel>
            <Input
              isInvalid={!!errors.email}
              {...register("email", { required: true })}
              maxW="100%"
              h="60px"
              bg="white"
            />
            {!!errors.email && <p>error email</p>}
          </FormControl>
          <FormControl>
            <FormLabel>PASSWORD:</FormLabel>
            <Input
              type="password"
              {...register("password")}
              maxW="100%"
              h="60px"
              bg="white"
            />
          </FormControl>
          <Button type="submit" variant="pink" minW="260px" h="35px">
            SIGN IN
          </Button>
        </VStack>
      </form>
    </Flex>
  );
}

export default SignInContent;
