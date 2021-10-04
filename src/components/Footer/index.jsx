import React from "react";
import { Flex, HStack, Img, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/inst.svg";
import { ReactComponent as Google } from "../../assets/googl.svg";
import { ReactComponent as Twitter } from "../../assets/twiter.svg";
import { ReactComponent as Youtube } from "../../assets/yout.svg";

const Footer = () => {
  return (
    <Flex
      px="60px"
      mt="100vh"
      minW="100vh"
      justifyContent="space-between"
      bg="red.300"
    >
      <VStack spacing="6">
        <Img width="70px" height="70px" src="/logo192.png" />
        <HStack spacing="2rem" pt="2rem">
          <Link to="https://www.facebook.com/" external>
            <Facebook />
          </Link>
          <Link to="https://www.youtube.com/" external>
            <Youtube />
          </Link>
          <Link to="https://myaccount.google.com/" external>
            <Google />
          </Link>
          <Link to="https://twitter.com/?lang=ru" external>
            <Twitter />
          </Link>
          <Link to="https://www.instagram.com/" external>
            <Instagram />
          </Link>
        </HStack>
        <Text>@ 2021 CompanyTools, Inc. All Rights Reserved</Text>
      </VStack>
      <VStack>
        <HStack spacing="4rem" mt="2rem">
          <Link to="/contacts">Contacts</Link>
          <Link to="/about">About</Link>
          <Link to="/certificate">Certifikate</Link>
          <Link to="/brands">Certifikate</Link>
        </HStack>
        <HStack spacing="6" pt="8rem">
          <Text>Terms & Conditions </Text>
          <Text>Privacy Policy</Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Footer;
