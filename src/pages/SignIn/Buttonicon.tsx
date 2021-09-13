import React from "react";
import { VStack, Text, HStack, Link } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Vk } from "../../assets/vk.svg";
import { ReactComponent as Google } from "../../assets/GOOGLE.svg";

const Buttonicon = () => {
  return (
    <VStack pt="1rem">
      <Link>
        <Text fontSize="sm">Forgot password?</Text>
      </Link>
      <Text fontSize="3xl" fontWeight="700" pt="4rem">
        Or sign up with...
      </Text>
      <HStack spacing="4rem" pt="3rem">
        <Link href="https://www.facebook.com/" isExternal>
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/" isExternal>
          <Instagram />
        </Link>
        <Link href="https://vk.com/" isExternal>
          <Vk />
        </Link>
        <Link href="https://myaccount.google.com/" isExternal>
          <Google />
        </Link>
      </HStack>
    </VStack>
  );
};

export default Buttonicon;
