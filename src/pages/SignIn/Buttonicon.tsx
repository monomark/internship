import React from "react";
import { VStack, Text, HStack, Link } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Vk } from "../../assets/vk.svg";
import { ReactComponent as Google } from "../../assets/GOOGLE.svg";

const Buttonicon = () => {
  return (
    <VStack pt="1rem">
      <Link href="/forgot-password">Forgot password?</Link>
      <Text fontSize="3xl" fontWeight="700" mt="4rem">
        Or sign up with...
      </Text>
      <HStack spacing="1.5rem" pt="3rem">
        <Link href="https://www.facebook.com/">
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Instagram />
        </Link>
        <Link href="https://vk.com/">
          <Vk />
        </Link>
        <Link href="https://myaccount.google.com/">
          <Google />
        </Link>
      </HStack>
    </VStack>
  );
};

export default Buttonicon;
