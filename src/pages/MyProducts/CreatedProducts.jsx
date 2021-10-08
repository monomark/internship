import React, { useState, useEffect } from "react";
import { SimpleGrid, GridItem, CloseButton } from "@chakra-ui/react";
import Card from "../../components/Card";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../../graphql/queries";
import { deleteProduct } from "../../graphql/mutations";
import * as mutations from "../../graphql/mutations";

const CreatedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await API.graphql(graphqlOperation(listProducts));
      const productList = productsData.data.listProducts.items;
      console.log("Product List", productList);
      setProducts(productList);
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
      const deleteproduct = await API.graphql(
        graphqlOperation(mutations.deleteProduct, { input: details })
      );

      console.log(deleteproduct);
    } catch (e) {
      console.log("error deleting item", e);
    }
  };

  console.log(products);

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
          <GridItem key={item.id}>
            {/* <CloseButton onClick={() => deleteProducts(data)}></CloseButton> */}
            <Card value={item} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CreatedProducts;
