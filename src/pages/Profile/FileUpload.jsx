import React, { useRef, useState } from "react";
import {
  Box,
  HStack,
  Button,
  VStack,
  Input,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

const FileUploud = () => {
  const [selectedFile, setSelectedFile] = useState();

  const onChange = (e) => {
    if (e.target.files && e.target.files.length > 0)
      setSelectedFile(e.target.files[0]);
  };

  const input = useRef(null)

  // async function onChange(e) {
  //   const selectedFile = e.target.files[0];
  //   try {
  //     await Storage.put(file.name, file, {
  //       contentType: "image/png", // contentType is optional
  //     });
  //     setSelectedFile(file);
  //     console.log(file);
  //   } catch (error) {
  //     console.log("Error uploading file: ", error);
  //   }
  // }
  const removeSelectedFile = () => {
    setSelectedFile();
  };
  const saveSelectedFile = () => {
    setSelectedFile(selectedFile);
    console.log(selectedFile);
  };

  return (
    <Box maxW="100vh">
      <VStack spacing="2rem">
        {selectedFile && (
          <Box>
            <Avatar
              fallbackSrc="https://via.placeholder.com/150"
              name="User"
              size="4xl"
              src={URL.createObjectURL(selectedFile)}
            >
              <AvatarBadge bg="green.500" boxSize="1.25rem" />
            </Avatar>
          </Box>
        )}

        <input ref={input} style={{display: 'none'}} type="file" onChange={onChange} accept="image/*" />
        <Button onClick={() => input.current?.click()}>Upload</Button>
        <HStack spacing="2rem">
          <Button variant="red" onClick={removeSelectedFile}>
            Remove This Image
          </Button>
          <Button variant="green" onClick={saveSelectedFile}>
            Save Image
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default FileUploud;
