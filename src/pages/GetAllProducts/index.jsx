import React, { useEffect, useState } from "react";
import { Button, Text, Box, Flex } from "@chakra-ui/react";
import { useListProject } from "../../hooks";
import { useDeleteProject } from "../../hooks";

const GetAllProducts = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { deleteProject } = useDeleteProject();
  const { isLoading, data, error } = useListProject();

  const deleteProd = async (id) => {
    try {
      setLoading(true);
      const deletedAray = list.filter((ind) => ind.id !== id);
      setList(deletedAray);
      deleteProject(id);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("product not deleted", e);
    }
  };

  useEffect(async () => {
    if (!!data) return await setList(data.data.listProducts.items);
  }, [data]);

  return (
    <Flex justifyContent="center">
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
