import { Button, Flex, Container } from "@chakra-ui/react";

const Buttons = () => {
  return (
      <Flex mt="2" justifyContent="space-between" w="full">
        <Button variant="pink">Kitchen</Button>
        <Button variant="pink">Living room</Button>
        <Button variant="pink">Bedroom</Button>
        <Button variant="pink">Bathroom</Button>
        <Button variant="pink">Hallway</Button>
        <Button variant="pink">Other</Button>
      </Flex>
  );
};

export default Buttons;
