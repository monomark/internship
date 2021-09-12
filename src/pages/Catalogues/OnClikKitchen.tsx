import React, { useState } from "react";
import {
  Container,
  Input,
  InputGroup,
  Image,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

const pictures = [
  { name: "first", src: "/assets/fb1c6350-c5d5-45d2-afed-79d09cb3fcf9.jpg" },
  { name: "second", src: "/assets/e264f577-09ce-453e-91b3-072eccbecd31.jpg" },
  { name: "third", src: "/assets/e45206eb-97c9-42d0-bca3-0cff2afdbecd.jpg" },
  { name: "forth", src: "/assets/e45206eb-97c9-42d0-bca3-0cff2afdbecd.jpg" },
];

const OnCllickKitchen = () => {
  const [value, setValue] = useState("");
  const [pics, setPics] = useState(pictures);

  const filterPics = pics.filter((pic) => {
    return pic.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <Container maxW="3xl" bg="gray.700">
      <InputGroup>
        <Input
          type="mebel"
          placeholder="Searching"
          onChange={(event) => setValue(event.target.value)}
        />
      </InputGroup>
      <Text color="pink">search result: </Text>
      {value}
      <Flex>
        {filterPics.map((item) => (
          <VStack>
            <Image src={item.src} h="200px" w="180px" />
            <Text color="pink">{item.name}</Text>
          </VStack>
        ))}
      </Flex>
    </Container>
  );
};
export default OnCllickKitchen;
