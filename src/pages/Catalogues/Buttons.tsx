import { Button, Flex, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <Flex mt="2" justifyContent="space-between" w="full">
      <Button variant="pink">
        {" "}
        <Link to="/catalogue/kitchen">kitchen</Link>
      </Button>
      <Button variant="pink">Living room</Button>
      <Button variant="pink">Bedroom</Button>
      <Button variant="pink">Bathroom</Button>
      <Button variant="pink">Hallway</Button>
      <Button variant="pink">Other</Button>
    </Flex>
  );
};

export default Buttons;
