import React, { useState, useEffect } from 'react'
import {
  Flex,
  Box,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useUser } from '../../hooks'
import { Link } from 'react-router-dom'
import FileUploud from './FileUpload'

const Profile = () => {
  const [todos, setTodos] = useState()
  const { user, loading } = useUser()
  if (!user) return <></>
  return (
    <Flex>
      <Flex justifyContent="center" w="full">
        <Box color="blue.300">
          <FileUploud />
            <Box fontSize="4xl">
              <UnorderedList>
                {/* <Img src={items.avatar} alt="user" h="50px" /> */}
                <ListItem>Age: {user.age}</ListItem>
                <ListItem>LastName: {user.last_name}</ListItem>
                <ListItem>Country: {user.country}</ListItem>
                <ListItem>PhoneNumber: {user.phone_number}</ListItem>
                <ListItem>Email: {user.email}</ListItem>
                <ListItem>CreateDate: {user.createdAt}</ListItem>
              </UnorderedList>
            </Box>
        </Box>
      </Flex>
      <Flex py="4" w="full" position="absolute" bottom="0" justifyContent="space-between" bg="blue.300" px="100px">
        <Link to="/">
          <Button variant="blue">Back</Button>
        </Link>
        <Link to="/forgotpassword">
          <Button variant="blue">Cange password</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Profile;
