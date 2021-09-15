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
};

function Reset() {
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
            w="full"
            h="60px"
            bg="grey.300"
            mb="1.5rem"
          />
        </FormControl>

        <VStack>
          <Button type="submit" variant="pink" minW="260px" h="35px">
            RESET PASSWORD
          </Button>
        </VStack>
      </form>
    </Flex>
  );
}
export default Reset;
