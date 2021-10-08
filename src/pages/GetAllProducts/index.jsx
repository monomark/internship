import React, { useState } from "react";
import { Button, Text, Box, Flex } from "@chakra-ui/react";
import { API } from "aws-amplify";
import { listProducts } from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
const GetAllProducts = () => {
  const [list, setList] = useState([]);

  const downloadCards = async () => {
    try {
      const allProducts = await API.graphql({ query: listProducts });
      const data = allProducts.data.listProducts.items;
      Array.from(data);
      console.log(data[0].title);
      setList(data);
    } catch (e) {
      console.log("Get all products problem", e);
    }
  };

  const deleteProd = async (item) => {
    try {
      const deletedAray = list.filter((ind) => ind != item);
      setList(deletedAray);

      console.log(item.id, "its id");
      const todoDetails = {
        id: item.id,
      };

      await API.graphql({
        query: mutations.deleteProduct,
        variables: { input: todoDetails },
      });
    } catch (e) {
      console.log("product not deleted", e);
    }
  };

  return (
    <Flex flexDirection="row">
      <Box border="2px solid black" h="100vh" bg="gray.100" m="2">
        <Button onClick={downloadCards} variant="red" m="4">
          Download all
        </Button>
      </Box>
      <Flex direction="column">
        {list.map((item) => (
          <Box border="2px solid black" borderRadius="lg" my="2" px="5">
            <Text>-{item.title ? item.title : "none"}</Text>
            <Text>-{item.description}</Text>
            <Text>-{item.type}</Text>
            <Text>-{item.warranty}</Text>
            <Text>-{item.price}</Text>
            <Button
              variant="red"
              size="sm"
              m="2"
              onClick={() => deleteProd(item)}
            >
              delete
            </Button>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default GetAllProducts;
