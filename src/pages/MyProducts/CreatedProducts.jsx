import React, { useState, useEffect } from "react";
import { SimpleGrid, GridItem, CloseButton, Button } from "@chakra-ui/react";
import Card from "../../components/Card";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import { useHistory } from "react-router-dom";

const CreatedProducts = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(true);

  const history = useHistory();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await API.graphql(graphqlOperation(listProducts));
      console.log(productsData);
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
      await API.graphql(
        graphqlOperation(mutations.deleteProduct, { input: details })
      );
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
          <GridItem
            key={item.id}
            onMouseMove={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            {show && (
              <CloseButton
                _hover={{ bg: "yellow.100" }}
                onClick={() => deleteProducts(item)}
              ></CloseButton>
            )}

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
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CreatedProducts;
