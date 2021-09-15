import React from "react";
import { Flex, Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import SignInContent from "./SignInContent";
import Buttonicon from "./Buttonicon";
import AuthLayout from "../../components/layouts/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout>

        <Header />
        <SignInContent />
        <Buttonicon />
    </AuthLayout>
  );
};

export default SignIn;
