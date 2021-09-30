import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <Box maxW="full" bg="gray.100" border="1px solid black" mt="10" p="5">
      <Flex justifyContent="space-arround">
        <Text size="xl">
          Подпишитесь на рассылку и будьте в курсе! Акции, скидки, распродажи
          ждут!
        </Text>

        <Input placeholder="enter your email" w="2xl" />
        <Button bg="red">subscribe</Button>
      </Flex>
    </Box>
  );
};

export default Subscribe;
