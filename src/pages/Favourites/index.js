import React, { useState, useEffect } from "react";
import { SimpleGrid, GridItem, Button } from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import Card from "../../components/Card";
import { useUser } from "../../hooks";
import { listProducts } from "../../graphql/queries";
import { updateUser } from "../../graphql/mutations";

const Favourites = () => {
  const [products, setProducts] = useState([]);

  const { user } = useUser();

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

  const RemoveFavourite = async (id) => {
    try {
      const userScreen = products.filter((item) => item.id !== id);
      setProducts(userScreen);
      const favourites = userScreen.map((item) => item.id);
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
          <GridItem position="relative" key={item.id}>
            <Card value={item} />
            <Button mt="4" p="4" onClick={() => RemoveFavourite(item.id)}>
              Remove
            </Button>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Favourites;
