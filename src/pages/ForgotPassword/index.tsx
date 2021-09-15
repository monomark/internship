import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Reset from "./Reset";
import AuthLayout from "../../components/layouts/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <Header />
      <Reset />
    </AuthLayout>
  );
};

export default ForgotPassword;
