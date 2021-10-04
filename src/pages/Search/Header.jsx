import React, { useEffect, useState } from "react";
import {
  Container,
  Input,
  InputGroup,
  Image,
  Flex,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

const pictures = [
  { name: "first", src: "/photo.jpg" },
  { name: "second", src: "/photo.jpg" },
  { name: "third", src: "/photo.jpg" },
  { name: "forth", src: "/photo.jpg" },
];

const Search = () => {
  const [show, setShow] = useState();
  const [pics, setPics] = useState([]);
  const [edit, setEdit] = useState();

  const Save = (name) => {
    const newPics = pics.map((item) => {
      if (item.name === name) {
        item.name = edit;
      }
      return item;
    });

    setShow(undefined);
    setPics([...newPics]);
  };

  const addPicture = () => {
    setPics([
      ...pics,
      {
        name: Date.now().toString(),
        src: " ",
      },
    ]);
  };

  const deletePicture = (name) => {
    setPics(pics.filter((item) => item.name !== name));
  };

  const onEdit = (disp, name) => {
    setEdit(pics.filter((item) => item.name === name)[0].name);
    setShow(disp);
  };

  useEffect(() => {
    setPics(pictures);
  }, [pictures]);

  return (
    <Container maxW="3xl" pt="2px">
      <InputGroup>
        <Input
          type="search"
          placeholder="Type something"
          onChange={(event) =>
            setPics(
              pictures?.filter((item) => item.name.includes(event.target.value))
            )
          }
          w="50%"
        />
        <Button color="#000000" backgroundColor="#4FD1C5">
          {" Search"}
        </Button>
        <Button onClick={addPicture} backgroundColor="#4FD1C5">
          {" "}
          add picture
        </Button>
      </InputGroup>
      <Text color="#000000">Search result: </Text>

      <Flex>
        {pics?.map((item, disp) => (
          <VStack>
            <Button
              onClick={() => deletePicture(item.name)}
              backgroundColor="#4FD1C5"
            >
              delete item
            </Button>
            <Button
              onClick={() => onEdit(disp, item.name)}
              backgroundColor="#4FD1C5"
            >
              edit
            </Button>
            <Image src={item.src} h="200px" w="180px" />
            <Text color="#000000">{item.name}</Text>
            (show === disp? (
            <>
              <Button onClick={() => Save(item.name)} backgroundColor="#4FD1C5">
                save
              </Button>
              <Input value={edit} onChange={(e) => setEdit(e.target.value)} />
            </>
            ) : ( ))
          </VStack>
        ))}
      </Flex>
    </Container>
  );
};

export default Search;
