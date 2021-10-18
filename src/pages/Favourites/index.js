import React, { useState, useEffect } from "react";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import Card from "../../components/Card";
import { useUser } from "../../hooks";
import { getProduct } from "../../graphql/queries";

const Favourites = () => {
  const [products, setProducts] = useState([]);

  const { user } = useUser();
  console.log(user);

  const getProducts = async () => {
    try {
      const id = user.favourites[0];
      const { data } = await API.graphql(
        graphqlOperation(getProduct, {
          id,
        })
      );
      const productList = data.getProduct;
      setProducts(productList);
    } catch (e) {
      console.log("error on getinging products", e);
    }
  };

  useEffect(() => {
    getProducts();
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
        {products && (
          <GridItem position="relative" key={products.id}>
            <Card value={products} />
          </GridItem>
        )}
      </SimpleGrid>
    </>
  );
};

export default Favourites;
