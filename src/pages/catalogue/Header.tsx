import { Image, Flex, Container } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container maxW="7xl" bg="#3B3B3B" py="10px">
      <Flex justifyContent="space-around" align="center">
        <Image
          src="/assets/Group.png"
          height="50px"
          width="50px"
          alt="logo"
          bg="#F62A80"
          borderRadius="20%"
          mt="5px"
        />
      </Flex>
    </Container>
  );
};
export default Header;
