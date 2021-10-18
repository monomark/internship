import React, { useState, useEffect } from "react";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import Card from "../../components/Card";
import { useUser } from "../../hooks";
import { listProducts } from "../../graphql/queries";

const Favourites = () => {
  const [products, setProducts] = useState([]);

  const { user } = useUser();
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
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Favourites;
