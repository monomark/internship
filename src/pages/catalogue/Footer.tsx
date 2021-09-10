import { Image, Flex, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container marginTop="auto" maxW="7xl" bg="#3B3B3B" mt="10px">
      <Flex justifyContent="space-around" align="center">
        <Image
          src="/assets/shtrix kod.png"
          height="80px"
          width="368px"
          alt="Shtrix kod"
        />
      </Flex>
    </Container>
  );
};

export default Footer;
