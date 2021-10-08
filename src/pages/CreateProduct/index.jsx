import React, { useState } from "react";
import {
  Box,
  Input,
  Select,
  VStack,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { graphqlOperation, API } from "aws-amplify";
import { createProduct } from "../../graphql/mutations";
import { TYPES } from "../../constats";
import { useHistory } from "react-router";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const submit = async (data) => {
    const { title, description, price, type, warranty } = data;
    try {
      setLoading(true);
      const input = {
        title,
        description,
        type,
        price,
        warranty,
      };
      await API.graphql(graphqlOperation(createProduct, { input }));
      history.replace("/");
    } catch (e) {
      setLoading(false);
      console.log("createTodo error", e);
    }
  };

  return (
    <>
      <Image
        display={{ base: "none", md: "block" }}
        objectFit="contain"
        src="/assets/buy1.png"
        maxW="400px"
        h="100vh"
        w="full"
      />

      <Box w="full" maxW="600px">
        <form noValidate onSubmit={handleSubmit(submit)}>
          <VStack px="8" spacing="4">
            <Input
              placeholder="название"
              isInvalid={!!errors.title}
              {...register("title", { required: true })}
            />
            <Input
              placeholder="описание"
              isInvalid={!!errors.description}
              {...register("description", { required: true })}
            />
            <Input
              placeholder="цена"
              isInvalid={!!errors.price}
              {...register("price", { required: true, valueAsNumber: true })}
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
            <Button isLoading={loading} type="submit" variant="red">
              Create
            </Button>

            <Link to="/get-allproducts">
              <Button variant="red">to get products</Button>
            </Link>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export default CreateProduct;