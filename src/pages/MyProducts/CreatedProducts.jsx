import React, { useState, useEffect } from "react";
import {
  SimpleGrid,
  GridItem,
  CloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import Card from "../../components/Card";
import { useUser } from "../../hooks";
import { updateUser } from "../../graphql/mutations";

const CreatedProducts = () => {
  const [products, setProducts] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const history = useHistory();
  const { user, setUserObject } = useUser();

  const fetchProducts = async () => {
    try {
      const { data } = await API.graphql(graphqlOperation(listProducts));
      const productList = data.listProducts.items;
      setProducts(productList);
      console.log(productList);
    } catch (e) {
      console.log("error on fetching products", e);
    }
  };

  const deleteProducts = async (data) => {
    try {
      const deleteproducts = products.filter((item) => item.id !== data.id);
      setProducts(deleteproducts);
      const details = {
        id: data.id,
      };
      await API.graphql(
        graphqlOperation(mutations.deleteProduct, { input: details })
      );
    } catch (e) {
      console.log("error deleting item", e);
    }
  };

  const addFavourites = async (data) => {
    try {
      const id = data.id;
      const details = {
        id: user.id,
        favourites: id,
      };
      await API.graphql(graphqlOperation(updateUser, { input: details }));
      setUserObject({
        loading: false,
        user: {
          ...user,
          ...details,
        },
      });
      history.push("/favourite");
    } catch (e) {
      console.log(e, "uodate   error ");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SimpleGrid
        w="full"
        columns={{
          base: 1,
          md: 2,
          xl: 3,
        }}
        spacing="6"
      >
        {products.map((item) => (
          <GridItem
            position="relative"
            key={item.id}
            _hover={{
              "& > div:first-of-type": {
                display: "block",
              },
            }}
          >
            <Box
              top="20px"
              right="20px"
              display="none"
              position="absolute"
              as={motion.div}
              transition={{
                duration: 30,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <CloseButton
                _hover={{ bg: "yellow.100" }}
                onClick={() => deleteProducts(item)}
              ></CloseButton>
            </Box>
            <Card value={item} />
            <Button
              float="right"
              mt="4"
              p="4"
              _hover={{ bg: "yellow.100" }}
              onClick={() => history.push(`/update-product?id=${item.id}`)}
            >
              Update
            </Button>
            <Button
              mt="4"
              p="4"
              _hover={{ bg: "yellow.100" }}
              onClick={() => addFavourites(item)}
            >
              Add
            </Button>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CreatedProducts;
