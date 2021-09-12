import { Image, Flex, Container } from "@chakra-ui/react";

const Header = () => {
  return (
      <Flex py="2" justifyContent="space-around" align="center">
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
  );
};
export default Header;
