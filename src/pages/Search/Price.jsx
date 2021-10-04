import { Container, Flex, Text, HStack } from "@chakra-ui/react";
import Card from "./Card";

const Best = [
  { name: "first", price: "3700" },
  { name: "second", price: "3700" },
  { name: "third", price: "3700" },
  { name: "forth", price: "3700" },
];

const Price = () => {
  return (
    <Container mt="8">
      <Flex justifyContent="center" alignItems="space-around">
        <Text fontSize="2xl">Drills</Text>
        <HStack mt="10">
          {Best.map((item) => (
            <Card value={item} />
          ))}
        </HStack>
      </Flex>
    </Container>
  );
};

export default Price;
