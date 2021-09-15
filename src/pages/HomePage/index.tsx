import { Box, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Navbar from './Navbar';
// import Header from "../HomePage/Header";

const Homepage = () => {
  return (
    <Box w="full" minH="100vh ">
      <Container position="relative" maxW="7xl">
        <Navbar />
        <Flex w="full" align="center" justifyContent="center" minH="100vh">
          <Flex w="full" align="center" justifyContent="space-between">
            <Box>
              <Heading>Your dream</Heading>
              <Text>here some text</Text>
              <Button w="200px" variant="blue">
                View catalog
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Homepage;
