import { VStack, Text, Image, Box } from "@chakra-ui/react";

const Pics3 = () => {
  return (
      <VStack>
        <Image
          src="/assets/e264f577-09ce-453e-91b3-072eccbecd31.jpg"
          w="360px"
          h="260px"
          borderRadius="10"
          shadow="5px 5px 100px 5px #C4C4C4"
        />

        <Text
          pt="10"
          align="center"
          fontFamily="Rochester"
          color="whiteAlpha.500"
          fontSize="2xl"
          w="360px"
          h="260px"
        >
          Some people look for
          <br /> a beautiful place,
          <br />
          others{"   "}&nbsp;
          <Box as="span" color="#FA4993">
            {" "}
            MAKE&nbsp;
          </Box>{" "}
          a
          <br />
          place beautiful
        </Text>

        <Image
          src="/assets/fb1c6350-c5d5-45d2-afed-79d09cb3fcf9.jpg"
          w="360px"
          h="550px"
          borderRadius="10"
          shadow="5px 5px 100px 5px #C4C4C4"
        />
      </VStack>
  );
};
export default Pics3;
