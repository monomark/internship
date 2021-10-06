import React from "react";
import { Flex, HStack } from "@chakra-ui/react";
import FileUploud from "./FileUpload";
import UserInfo from "./UserInfo";

const Profile = () => {
  // if (!user) return <></>;
  return (
    <Flex px="60px" maxw="100vh" mt="150px">
      <Flex w="full">
        <HStack spacing="6rem">
          <FileUploud />
          <UserInfo />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Profile;
