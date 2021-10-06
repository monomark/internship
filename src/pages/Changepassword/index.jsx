import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import { updateUser } from "../../graphql/mutations";
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
  const [value, setValue] = useState();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm({});
  // const password = useRef({});
  // password.current = watch("password", "");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };

  Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, value, password);
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);
  //     await Auth.currentAuthenticatedUser(user, "oldPassword", "newPassword");
  //     history.push("/profile");
  //   } catch (e) {
  //     loading(false);
  //     console.log("error password", e);
  //   }
  // };

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
              value={value}
              onChange={onChange}
              ref={register({
                required: "You must specify a password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            {errors.password && <Text>{errors.password.message}</Text>}

            <FormLabel>NEW PASSWORD:</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={onChange}
              ref={register({
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.password_repeat && (
              <Text>{errors.password_repeat.message}</Text>
            )}
            <Button
              variant="pink"
              type="submit"
              onClick={handleSubmit(onSubmit)}
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
