import {
    Text,
    Image,
    Stack,
    Heading,
    Box,
} from "@chakra-ui/react";

const Card = ({value}) => {
  return (
      <Box
        borderRadius="8px"
        overflow="hidden"
        boxShadow="0 0 24px 4px rgba(0, 0, 0, 0.15)">
        <Image
            src="/assets/images/photo.jpg"
            w="full"
            objectFit="cover"
            h="200px" />
        <Stack
            p="4"
            bg="yellow.100">
            <Heading
                fontSize="3xl"
                as="h2">
                {value.name}
            </Heading>
            <Text>Price: {value.price} AMD</Text>
            <Text>Type: {value.type}</Text>
        </Stack>
      </Box>
  );
};

export default Card;
