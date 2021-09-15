import React from "react";
import { Text, VStack, HStack, Link } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Vk } from "../../assets/vk.svg";
import { ReactComponent as Google } from "../../assets/GOOGLE.svg";

const Signupwith = () => {
  return (
    <VStack spacing="1.5rem">
      <Text>Sign up with...</Text>
      <HStack spacing="2.8rem" pt="1.6rem" pb="2.4rem">
        <Link href="https://www.facebook.com/" isExternal>
          <Facebook height="2.5rem" width="2.5rem" />
        </Link>
        <Link>
          <Instagram height="2.5rem" width="2.5rem" />
        </Link>
        <Link href="https://vk.com/" isExternal>
          <Vk height="2.5rem" width="2.5rem" />
        </Link>
        <Link href="https://accounts.google.com/" isExternal>
          <Google height="2.5rem" width="2.5rem" />
        </Link>
      </HStack>
      <Text>Or sign up with Email</Text>
    </VStack>
  );
};

export default Signupwith;
