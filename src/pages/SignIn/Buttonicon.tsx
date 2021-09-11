import React from "react";
import { VStack, Button, Text, HStack, Link } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Vk } from "../../assets/vk.svg";
import { ReactComponent as Google } from "../../assets/GOOGLE.svg";

const Buttonicon = () => {
  return (
    <VStack pt="2rem">
      <Button variant="pink" w="260px" h="35px">
        SIGN IN
      </Button>
      <Text fontSize="sm">Forgot password?</Text>
      <Text fontSize="3xl" fontWeight="700" pt="4rem">
        Or sign up with...
      </Text>
      <HStack spacing="1.8rem" pt="3rem">
        <Link href="https://www.facebook.com/" isExternal />
        <Facebook />
        <Link href="https://www.instagram.com/" isExternal />
        <Instagram />
        <Link href="https://vk.com/" isExternal />
        <Vk />
        <Link href="https://myaccount.google.com/" isExternal />
        <Google />
      </HStack>
    </VStack>
  );
};

export default Buttonicon;
