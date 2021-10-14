import React, { useState, useRef } from "react";
import { Box, Input, Select, VStack, Button, Image } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { graphqlOperation, API, Storage } from "aws-amplify";
import { createProduct } from "../../graphql/mutations";
import { TYPES } from "../../constats";
import { useHistory } from "react-router";
import { useCreateProduct } from "../../hooks";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const input = useRef(null);
  const [image, setImage] = useState('');
  const {createProduct, isLoading, data, error} = useCreateProduct()

  const goBack = () => history.goBack();

  const submit = async (data) => {
    try {
      const { title, description, price, type, warranty } = data;
      const input = {
        title,
        description,
        type,
        price,
        warranty,
        image,
      };
      createProduct(
        input,
        {
          onSuccess: () => history.replace("/"),
          onError: (e) => console.log(e)
        }
      )
    } catch (e) {
      console.log("createTodo error", e);
    }
  };

  const onChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const url = await Storage.put(file.name, file);
        setImage(url.key)
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }
  };

  return (
    <>
      <Button onClick={goBack}>Back</Button>

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
            {image &&  <Image
                size="4xl"
                objectFit="cover"
                src={process.env.REACT_APP_STORAGE + image}
                w="300px"
                h="300px"
              />}
             
            <Input
              // placeholder="image"
              display="none"
              isInvalid={!!errors.image}
              // {...register("image", { required: true })}
              type="file"
              onChange={onChange}
              accept="image/*"
              ref={input}
            />
            <Button isLoading={loading} onClick={() => input.current?.click()}>
              Upload
            </Button>
            Remove This Image
            {/* {/* </Button> */}
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
            <Button isLoading={isLoading} type="submit" variant="red">
              Create
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export default CreateProduct;
