import { Container, Flex, Text, HStack, SimpleGrid, GridItem } from "@chakra-ui/react";
import Card from "../../components/Card";

const Best = [
  { name: "first", price: 3700, type: 'Wood'  },
  { name: "second", price: 50000, type:  'Metal' },
  { name: "third", price: 1000, type: 'Other'  },
  { name: "forth", price: 15000, type:  'Plastic' },
];

const Products = () => {
  return (
    <SimpleGrid
        w="full"
        columns={{
        base: 1,
        md: 2,
        xl: 3,
        }}
        spacing="6"
    >
      {Best.map((item) => (
        <GridItem key={item.name}>
          <Card value={item} />
        </GridItem>
      ))}
  
    </SimpleGrid>
  );
};

export default Products;
