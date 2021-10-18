import React, { useState } from "react";
import { Input, Button, Flex, Box, VStack, Image } from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useLocation, useHistory, Link } from "react-router-dom";
import useQueryParams from "../../hooks/useQueryParams";
import authService from "../../core/service/authService";
import { useResend, useVerify } from "../../hooks";

const Verify = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const [error, setError] = useState(false);
  const params = useQueryParams();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const {
    confirmSignUp,
    isLoading: confirmLoading,
    error: confirmError,
  } = useVerify();
  const {
    resendSignUp,
    isLoading: resendLoading,
    error: resendError,
  } = useResend();

  const submit = async (event) => {
    event.preventDefault();
    const username = params.get("username");
    console.log(username);
    const code = value;
    const data = { username, code };

    console.log(data);
    //   await Auth.confirmSignUp(username, value);

    confirmSignUp(data, {
      onSucsess: () => history.push("/login"),
      onError: (e) => console.log("error confirming register", e, data),
    });
  };
  // const submit = async (event) => {
  //   event.preventDefault();
  //   const username = params.get("username");
  //   try {
  //     setLoading(true);
  //     await Auth.confirmSignUp(username, value);

  //     history.push("/login");
  //   } catch (e) {
  //     setLoading(false);
  //     setError(true);
  //     console.log("error confirming register", e);
  //   }
  // };

  const resend = (event) => {
    event.preventDefault();
    const username = params.get("username");
    resendSignUp(username, {
      onSuccess: () => console.log("success"),
      onError: (e) => console.log("error resending code: ", e),
    });
  };

  // const resend = async (event) => {
  //   event.preventDefault();
  //   const username = params.get("username");
  //   try {
  //     setLoading2(true);
  //     await Auth.resendSignUp(username);
  //     setLoading2(false);
  //   } catch (err) {
  //     setError(true);
  //     setLoading2(false);
  //     console.log("error resending code: ", err);
  //   }
  // };

  return (
    <>
      <Image src="/assets/mobile.png" maxW="600px" h="100vh" w="full" />
      <Flex justifyContent="center" w="full">
        <Box w="full" maxW="600px">
          <form onSubmit={submit}>
            <VStack px="8" spacing="5" w="full">
              <Link to="/">
                <Image src="/assets/logosh.png" maxW="300px" w="full" />
              </Link>
              <Input
                isInvalid={confirmError}
                placeholder="write code"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <Button type="submit" variant="red" isLoading={confirmLoading}>
                Verify
              </Button>
              <Link to="/register">
                <Button variant="red">Register</Button>
              </Link>
              <Button variant="red" onClick={resend} isLoading={resendLoading}>
                Resend
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Verify;
