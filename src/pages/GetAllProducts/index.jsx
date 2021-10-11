import React, { useEffect, useState } from "react";
import { Button, Text, Box, Flex } from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../../graphql/queries";
import { deleteProduct } from "../../graphql/mutations";
const GetAllProducts = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  const deleteProd = async (id) => {
    try {
      setLoading(true)
      const deletedAray = list.filter((ind) => ind.id !== id);
      setList(deletedAray);
      await API.graphql(graphqlOperation( deleteProduct,
        { input: {id} }));
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log("product not deleted", e);
    }
  };

  useEffect( async () => {
    const data = await API.graphql(graphqlOperation(listProducts))
    setList(data.data.listProducts.items)
  }, [])
  
  return (
      <Flex direction="column">
        {list.map((item) => (
          <Box border="2px solid black" borderRadius="lg" my="2" px="5">
            <Text>-{item.title ? item.title : "none"}</Text>
            <Text>-{item.description}</Text>
            <Text>-{item.type}</Text>
            <Text>-{item.warranty}</Text>
            <Text>-{item.price}</Text>
            <Button
              isLoading={loading}
              variant="red"
              size="sm"
              m="2"
              onClick={() => deleteProd(item.id)}
            >
              delete
            </Button>
          </Box>
        ))}
      </Flex>
  );
};

export default GetAllProducts;
