import { Button, Flex, Container } from "@chakra-ui/react";

const Buttons = () => {
  return (
    <Container maxW="6xl" height="15px" pt="10px">
      <Flex justifyContent="space-between" w="full">
        <Button variant="pink">Kitchen</Button>
        <Button variant="pink">Living room</Button>
        <Button variant="pink">Bedroom</Button>
        <Button variant="pink">Bathroom</Button>
        <Button variant="pink">Hallway</Button>
        <Button variant="pink">Other</Button>
      </Flex>
    </Container>
  );
};

export default Buttons;
