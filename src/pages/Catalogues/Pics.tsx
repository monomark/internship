import { VStack, Text, Image } from "@chakra-ui/react";

const Pics = () => {
  return (
      <VStack>
        <Image
          src="/assets/e264f577-09ce-453e-91b3-072eccbecd31.jpg"
          w="360px"
          h="550px"
          borderRadius="10"
          shadow="5px 5px 100px 5px #C4C4C4"
        />

        <Text
          
          align="center"
          fontFamily="Rochester"
          color="whiteAlpha.500"
          fontSize="2xl"
          pt="57px"
          pb="57px"
          
        >
          Make it
          <br />
          simple
          <br />
          but
          <br />
          significant
        </Text>

        <Image
          src="/assets/79677ee8-7eae-4dc2-922b-55c459e83098.jpg"
          w="360px"
          h="260px"
          borderRadius="10"
          shadow="5px 5px 100px 5px #C4C4C4"
        />
      </VStack>
  );
};
export default Pics;
