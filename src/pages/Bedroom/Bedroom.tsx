import React from "react";
import { Box, Flex, Container, Image, Button } from "@chakra-ui/react";

const Bedroom = () => {
  return (
    <Container pb="30px">
      <Box>
        <Box
          className="poxos"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image w="365px" h="660px" src="/assets/nkar1.png" alt="furniture" />
          <Image w="365px" h="660px" src="/assets/nkar2.png" alt="furniture" />
          <Image w="365px" h="660px" src="/assets/nkar3.png" alt="furniture" />
        </Box>
        <Box
          className="poxos"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image w="560px" h="402px" src="/assets/nkar4.png" alt="furniture" />
          <Image w="560px" h="402px" src="/assets/nkar5.png" alt="furniture" />
        </Box>

        <Box
          className="poxos"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image w="545px" h="656px" src="/assets/nkar6.png" alt="furniture" />
          <Image w="545px" h="656px" src="/assets/nkar7.png" alt="furniture" />
        </Box>

        <Box
          className="poxos"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image w="365px" h="660px" src="/assets/nkar8.png" alt="furniture" />
          <Image w="365px" h="660px" src="/assets/nkar9.png" alt="furniture" />
          <Image w="365px" h="660px" src="/assets/nkar10.png" alt="furniture" />
        </Box>
      </Box>
      <Box>
        <Flex alignItems="flex-end" justifyContent="center">
          <Button variant="pink" height="40px" width="420pxpx">
            Load more products
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Bedroom;
