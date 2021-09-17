import React from "react";
import { Divider } from "@chakra-ui/react";
import Signbuttons from "./Signbuttons";
import Signupform from "./Signupform";
import Signupwith from "./Signupwith";
import AuthLayout from "../../components/layouts/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
      <Signbuttons />
      <Divider width="full" borderColor="#000" mb="4" />
      <Signupwith />
      <Signupform />
    </AuthLayout>
  );
};

export default Signup;
