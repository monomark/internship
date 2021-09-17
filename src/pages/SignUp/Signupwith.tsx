import React from "react";
import { Text, VStack, HStack, Link } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Vk } from "../../assets/vk.svg";
import { ReactComponent as Google } from "../../assets/GOOGLE.svg";

const Signupwith = () => {
  return (
    <VStack spacing="1rem">
      <Text fontSize="3xl" fontWeight="700" mt="1rem">
        Sign up with...
      </Text>
      <HStack spacing="2rem">
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
      <Text fontSize="3xl" fontWeight="700" mt="1rem">
        Or sign up with Email
      </Text>
    </VStack>
  );
};

export default Signupwith;
