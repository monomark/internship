import { Text, Box, Image, Flex, VStack } from "@chakra-ui/react";
import Photo from "./photo.jpg";

const Card = (props) => {
  return (
    <Box>
      <VStack spacing="3" w="80" h="100">
        <Box>
          <Image src={Photo} w="300px" h="330px" />
          <Flex direction="column">
            <Text>{props.value.name}</Text>
            <Text> {props.value.price} $</Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
