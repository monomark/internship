import React, { useRef, useState } from "react";
import {
  Box,
  HStack,
  Button,
  VStack,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { Storage } from "aws-amplify";
import { useUser } from "../../hooks";
import { useUpdateProject } from "../../hooks";

const FileUploud = () => {
  const { user, setUserObject } = useUser();
  const [loading, setLoading] = useState(false);
  const { updateProject } = useUpdateProject();

  const input = useRef(null);

  const onChange = async (e) => {
    setLoading(true);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        if (!!user.avatar) {
          await Storage.remove(user.avatar);
        }
        const data = await Storage.put(`${user.id}/${file.name}`, file);
        updateProject(input, {
          id: user.id,
          avatar: data.key,
        });

        setUserObject({
          loading: false,
          user: {
            ...user,
            avatar: data.key,
          },
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error uploading file: ", error);
      }
    }
  };

  const removeSelectedFile = async () => {
    if (!!user.avatar) {
      setLoading(true);
      try {
        await Storage.remove(user.avatar);
        setUserObject({
          loading: false,
          user: {
            ...user,
            avatar: "",
          },
        });
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log("delete", e);
      }
    }
  };

  return (
    <Box maxW="100vh">
      <VStack spacing="2rem">
        <Box>
          <Avatar
            name="User"
            size="4xl"
            src={`${process.env.REACT_APP_STORAGE}${user.avatar}`}
            w="300px"
            h="300px"
          >
            <AvatarBadge bg="green.500" boxSize="1.25rem" />
          </Avatar>
        </Box>
        <input
          ref={input}
          multiple
          style={{ display: "none" }}
          type="file"
          onChange={onChange}
          accept="image/*"
        />
        <Button isLoading={loading} onClick={() => input.current?.click()}>
          Upload
        </Button>
        <HStack spacing="2rem">
          <Button variant="red" onClick={removeSelectedFile}>
            Remove This Image
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default FileUploud;
