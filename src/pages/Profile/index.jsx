import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
import * as queries from "../../graphql/queries";
import { Link } from "react-router-dom";
import FileUploud from "./FileUpload";

const Profile = () => {
  const [todos, setTodos] = useState([]);

  async function fetchlistUser() {
    try {
      const listUsers = await API.graphql({ query: queries.listUsers });

      const todos = listUsers.data.listUsers.items;
      setTodos(todos);
      console.log({ todos });
    } catch (err) {
      console.log("error fetching User");
    }
  }
  useEffect(() => {
    fetchlistUser();
  }, []);

  return (
    <Box w="full">
      <Flex justifyContent="space-between" bg="blue.300" px="100px">
        <Link to="/">
          <Button variant="blue">Back</Button>
        </Link>
        <Link to="/forgotpassword">
          <Button variant="blue">Cange password</Button>
        </Link>
      </Flex>
      <Flex justifyContent="center" w="full">
        <Box color="blue.300">
          <FileUploud />
          {todos.map((items) => (
            <Box fontSize="4xl">
              <UnorderedList>
                {/* <Img src={items.avatar} alt="user" h="50px" /> */}
                <ListItem>Age: {items.age}</ListItem>
                <ListItem>LastName: {items.last_name}</ListItem>
                <ListItem>Country: {items.country}</ListItem>
                <ListItem>PhoneNumber: {items.phone_number}</ListItem>
                <ListItem>Email: {items.email}</ListItem>
                <ListItem>CreateDate: {items.createdAt}</ListItem>
                <ListItem>Id: {items.id}</ListItem>
              </UnorderedList>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
