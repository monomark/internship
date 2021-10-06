import React from "react";
import { Box, Input, Select, VStack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {  graphqlOperation, API } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { TYPES } from "../../constats";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    try {
     
      const input = {
       
        title: data.tittle,
        description: data.description,
        type: data.type,
        price: data.price,
        warranty: data.warranty
      };
      await API.graphql(graphqlOperation(createTodo, { input }));
    } catch (e) {
      console.log("createTodo error", e);
    }
  };

  return (
    <Box w="full" maxW="600px">
      <form noValidate onSubmit={handleSubmit(submit)}>
        <VStack px="8" spacing="4">
          {/* <Input
            placeholder="image "
            isInvalid={!!errors.image}
            {...register("image ", { required: true })}
            type="file"
          /> */}
          <Input
            placeholder="название"
            isInvalid={!!errors.tittle}
            {...register("tittle", { required: true })}
          />
          <Input
            placeholder="описание"
            isInvalid={!!errors.description}
            {...register("description", { required: true })}
          />
          <Input
            placeholder="цена"
            isInvalid={!!errors.price}
            {...register("price", { required: true })}
            type="number"
            pattern="[0-9]*"
          />
          <Input
            placeholder="гарантия"
            isInvalid={!!errors.warranty}
            {...register("warranty", { required: true })}
          />

          <Select
            placeholder="тип"
            isInvalid={!!errors.type}
            {...register("type", { required: true })}
          >
            {TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <Button type="submit">Create</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateProduct;
