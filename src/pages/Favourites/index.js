import React, { useState, useEffect } from "react";
import { SimpleGrid, GridItem, IconButton, Box } from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import Card from "../../components/Card";
import { useUser } from "../../hooks";
import { listProducts } from "../../graphql/queries";
import { updateUser } from "../../graphql/mutations";
import { FaHeart } from "react-icons/fa";

const Favourites = () => {
  const [products, setProducts] = useState([]);

  const { user, setUserObject } = useUser();
  console.log(user);

  const fetchProduct = async () => {
    try {
      const ids = user.favourites;
      const { data } = await API.graphql(graphqlOperation(listProducts));
      setProducts(
        data.listProducts.items.filter((item) => ids.includes(item.id))
      );
    } catch (e) {
      console.log("error on getinging products", e);
    }
  };

  const removeFavourite = async (id) => {
    try {
      const favourites = user.favourites.filter((item) => item !== id);
      setUserObject({
        loading: false,
        user: {
          ...user,
          favourites: favourites,
        },
      });
      const { data } = await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: user.id,
            favourites: favourites,
          },
        })
      );
      console.log(data);
    } catch (e) {
      console.log("error remove favourite", e);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [user]);

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
          <GridItem position="relative" key={item.id}>
            <Card value={item} />
            <Box bottom="20px" right="20px" position="absolute">
              <IconButton
                float="left"
                mt="4"
                p="4"
                _hover={{ bg: "white" }}
                onClick={() => removeFavourite(item.id)}
                icon={<FaHeart size="2rem" />}
                color="red"
              ></IconButton>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Favourites;
