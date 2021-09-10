import React from "react";
import { Image, Text, Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex w="full" justifyContent="space-between" alignItems="center" py="6">
      <Flex>
        <Image
          src="/assets/Group.png"
          alt="group"
          w="50px"
          h="50px"
          bg="#FA4993"
          borderRadius="20%"
        />
        <Image src="/assets/art.png" alt="art" w="200px" h="50px" />
      </Flex>
      <Text color="whiteAlpha.600" fontSize="2xl">
        C o n t a c t s
      </Text>
      <Flex justifyContent="space-between" alignItems="center" w="150px">
        <Image src="/assets/user1.png" alt="user1" w="30px" h="30px" />
        <Image src="/assets/Group1.png" alt="group1" w="30px" h="30px" />
        <Image src="/assets/recycle.png" alt="recycle" w="30px" h="30px" />
      </Flex>
    </Flex>
  );
};
