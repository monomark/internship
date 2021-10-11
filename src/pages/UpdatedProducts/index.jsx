import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Select,
  VStack,
  Button,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { API } from "aws-amplify";
import { useHistory, Link } from "react-router-dom";
import * as mutations from "../../graphql/mutations";
import useQueryParams from "../../hooks/useQueryParams";
import { TYPES } from "../../constats";

const UpdatedProducts = () => {
  const [loading, setLoading] = useState(false);
  const params = useQueryParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const submit = async (data) => {
    try {
      setLoading(true);
      const ids = params.get("id");
      const details = {
        id: ids,
        title: data.title,
        price: data.price,
        type: data.type,
      };

      await API.graphql({
        query: mutations.updateProduct,
        variables: { input: details },
      });
      history.push("/myproducts");
    } catch (e) {
      setLoading(false);
      console.log("update error", e);
    }
  };

  return (
    <>
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form noValidate onSubmit={handleSubmit(submit)}>
            <VStack px="8" spacing="5" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Text fontSize="3xl" fontWeight="bold">
                Update Product
              </Text>
              <Input
                placeholder="title"
                isInvalid={!!errors.title}
                {...register("title", { required: true })}
              />
              <Input
                placeholder="price"
                isInvalid={!!errors.price}
                {...register("price", { required: true })}
                type="number"
                pattern="[0-9]*"
              />
              <Select
                placeholder="type"
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
                Update
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default UpdatedProducts;
