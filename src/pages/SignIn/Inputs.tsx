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

function Inputs() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Flex justifyContent="center" pt="2rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email">
          <FormLabel>EMAIL ADRESS:</FormLabel>
          <Input
            type="email"
            {...register("email")}
            w="330px"
            h="60px"
            bg="grey.300"
            mb="1.5rem"
          />
        </FormControl>
        <FormControl>
          <FormLabel>PASSWORD:</FormLabel>
          <Input
            type="password"
            {...register("password")}
            w="330px"
            h="60px"
            bg="grey.300"
            mb="1.5rem"
          />
        </FormControl>
        <VStack>
          <Button type="submit" variant="pink" minW="260px" h="35px">
            SIGN IN
          </Button>
        </VStack>
      </form>
    </Flex>
  );
}
export default Inputs;
