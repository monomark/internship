import React from "react";
import { Image, VStack, Button } from "@chakra-ui/react";
import Search from "../Bedroom/Search";

const Header = () => {
  return (
    <>
      <VStack alignItems="center" justifyContent="center" mt="10px">
        <Image height="60px" width="60px" src="/assets/Logo.png" alt="logo" />
        <Button variant="pink">Bedroom</Button>
      </VStack>
      <Search />
    </>
  );
};

export default Header;
