import React from "react";
import { HStack, Flex, Image, Box, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      position="absolute"
      w="full"
      py="4rem"
      align="center"
      justifyContent="space-between"
    >
      <Image
        mr="4"
        height="80px"
        width="420px"
        src="/assets/artlogo.png"
        alt="artlogo"
      />

      <Box as="span" color="white" fontSize="xl">
        Contacts
      </Box>
      <HStack spacing="14">
        <Link href="/sign-in">
          <Image height="30px" width="30px" src="/assets/user.png" alt="user" />
        </Link>
        <Image height="30px" width="30px" src="/assets/heart.png" alt="heart" />
        <Image height="30px" width="30px" src="/assets/box.png" alt="box" />
      </HStack>
    </Flex>
  );
};

export default Navbar;
