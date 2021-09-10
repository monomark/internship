import React from "react";
import { Text, VStack, HStack, Link } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Vk } from "../../assets/vk.svg";
import { ReactComponent as Google } from "../../assets/GOOGLE.svg";

const Signupwith = () => {
  return (
    <VStack spacing="25px">
      <Text>Sign up with...</Text>
      <HStack spacing="45px" pt="26px" pb="38px">
        <Link href="https://www.facebook.com/" isExternal>
          <Facebook height="40px" width="40px" />
        </Link>
        <Link>
          <Instagram height="40px" width="40px" />
        </Link>
        <Link href="https://vk.com/" isExternal>
          <Vk height="40px" width="40px" />
        </Link>
        <Link href="https://accounts.google.com/" isExternal>
          <Google height="40px" width="40px" />
        </Link>
      </HStack>
      <Text>Or sign up with Email</Text>
    </VStack>
  );
};

export default Signupwith;
