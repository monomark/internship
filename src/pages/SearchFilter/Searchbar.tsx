import React, { useState } from "react";
import {
  HStack,
  Button,
  Input,
  Flex,
  VStack,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";

const pictures = [
  { id: 0, title: "seven", src: "/assets/sofa1.png" },
  { id: 1, title: "eight", src: "/assets/sofa2.png" },
  { id: 2, title: "nine", src: "/assets/sofa3.png" },
  { id: 3, title: "ten", src: "/assets/sofa4.png" },
];

type Pictures = {
  id: number;
  title: string;
  src: string;
};

const SearchBar = () => {
  const [pics, setPics] = useState<Array<Pictures>>(pictures);
  const [show, setShow] = useState<number>();
  const [edit, setEdit] = useState<string>("");

  const addPics = () => {
    setPics([
      ...pics,
      {
        id: 5,
        title: "eleven",
        src: "",
      },
    ]);
  };

  const deletePics = (id: number) => {
    setPics(pics.filter((item) => item.id !== id));
  };

  const onEdit = (id: number, title: string) => {
    setEdit(pics.filter((item) => item.title === title)[0].title);
    setShow(id);
  };

  const save = (title: string) => {
    const newArray = pics.map((item) => {
      if (item.title === title) {
        item.title = edit;
      }
      return item;
    });
    setShow(undefined);
    setPics([...newArray]);
  };

  return (
    <Container maxW="5xl">
      <HStack spacing={0.5}>
        <Input
          bg="white"
          type="text"
          placeholder="Searching..."
          onChange={(event) =>
            setPics(
              pictures?.filter((item) =>
                item.title.includes(event.target.value)
              )
            )
          }
        />
        <Button height="40px" width="100px" colorScheme="teal" variant="solid">
          Search
        </Button>
      </HStack>
      <Button
        height="40px"
        width="100px"
        colorScheme="teal"
        variant="solid"
        onClick={addPics}
      >
        Add
      </Button>
      <Flex py="3rem" justifyContent="center">
        {pics?.map((item) => (
          <VStack spacing={4}>
            <HStack>
              <Button
                height="40px"
                width="100px"
                colorScheme="teal"
                variant="solid"
                onClick={() => deletePics(item.id)}
              >
                Delete
              </Button>
              <Button
                height="40px"
                width="100px"
                colorScheme="teal"
                variant="solid"
                onClick={() => onEdit(item.id, item.title)}
              >
                Edit
              </Button>
            </HStack>
            <Image src={item.src} h="200px" />
            {show === item.id ? (
              <>
                <Button
                  height="40px"
                  width="100px"
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => save(item.title)}
                >
                  Save
                </Button>
                <Input
                  bg="white"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
              </>
            ) : (
              <Text color="pink" fontSize="30px">
                {item.title}
              </Text>
            )}
          </VStack>
        ))}
      </Flex>
    </Container>
  );
};

export default SearchBar;
