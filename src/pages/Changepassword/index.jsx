import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  Flex,
  Box,
  Input,
  Img,
  Text,
  VStack,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";

const UserDetails = () => {
  const history = useHistory();
  const [error, setError] = useState();
  const [value, setValue] = useState({
    newPassword: "",
    oldPassword: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    return (
      value.oldPassword.length > 0 &&
      value.newPassword.length > 0 &&
      value.oldPassword === value.confirmPassword
    );
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(value)) {
      return setError(true);
    }
    setError(false);

    try {
      // setLoading(true);
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        currentUser,
        value.oldPassword,
        value.newPassword
      );
      history.push("/profile");
    } catch (e) {
      // loading(false);
      console.log("error password", e);
    }
  };

  return (
    <Flex justifyContent="center" pt="3rem" mb="1rem">
      <Box w="500px">
        <VStack color="red.300" spacing="2rem">
          <Img src="/assets/pad.png" alt="pad" />
          <Text fontSize="4xl">CHANGE PASSWORD</Text>
          <Text fontSize="2xl">
            Feel free to update your password so your account stays secure.
          </Text>
          <form onSubmit={onSubmit}>
            <FormLabel>CURRENT PASSWORD:</FormLabel>
            <Input
              type="password"
              value={oldPassword}
              onChange={onChange}
              isInvalid={error}
            />

            <FormLabel>NEW PASSWORD:</FormLabel>
            <Input
              type="password"
              value={newPassword}
              onChange={onChange}
              isInvalid={error}
            />
            <FormLabel>CONFIRM PASSWORD:</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={onChange}
              isInvalid={error}
            />

            <Button
              variant="pink"
              type="submit"
              // isLoading={loading}
              onClick={onSubmit}
            >
              SAVE CHANGES
            </Button>
          </form>
        </VStack>
      </Box>
    </Flex>
  );
};

export default UserDetails;
