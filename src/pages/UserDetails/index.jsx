import React from "react";
import { useUser } from "../../hooks";
import { Flex, Box, Input, Img, Text, VStack, Button } from "@chakra-ui/react";
// import { API } from "aws-amplify";
// import * as mutations from "../../graphql/mutations";

const UserDetails = () => {
  const { user } = useUser();

  // const details = {
  //   email: user.email,
  //   phone_number: user.phone_number,
  //   first_name: user.first_name,
  //   last_name: user.last_name,
  //   age: age,
  // };

  // const updateUser = await API.graphql({
  //   query: mutations.updateUser,
  //   variables: { input: details },
  // });

  return (
    <Flex justifyContent="center" pt="3rem" mb="1rem">
      <Box w="500px">
        <VStack color="red.300" spacing="2rem">
          <Img src="/assets/user.png" alt="user" />
          <Text fontSize="4xl">My Details</Text>
          <Text fontSize="2xl">
            Feel free edit any of your details below so your account is totally
            up to date.
          </Text>
          <Input type="text" value={user.first_name} />
          <Input type="text" value={user.last_name} />
          <Input type="text" value={user.age} />
          <Input type="text" value={user.phone_number} />
          <Input type="text" value={user.email} />

          <Button variant="pink">SAVE CHANGES</Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default UserDetails;
