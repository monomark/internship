import { Image, Flex, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
      <Flex mt="2" justifyContent="space-around" align="center">
        <Image
          src="/assets/shtrix kod.png"
          height="80px"
          width="368px"
          alt="Shtrix kod"
        />
      </Flex>
  );
};

export default Footer;
