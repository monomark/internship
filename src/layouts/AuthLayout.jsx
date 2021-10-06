import React from "react";
import { Flex } from "@chakra-ui/react";

const AuthLayout = ({ children }) => (
  <Flex
    direction={["column", "column", "row"]}
    alignItems="center"
    minHeight="100vh"
    width="100%"
  >
    {children}
  </Flex>
);

export default AuthLayout;
