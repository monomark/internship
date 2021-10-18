import { HStack, Flex, Button, Img, Box } from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks";
import authService from "../../core/service/authService";

const Navbar = () => {
  const { user, setUserObject } = useUser();
  const signOut = async () => {
    setUserObject({ user: "", loading: false });
    authService().signOut();
  };

  return (
    <Flex
      px="60px"
      height="80px"
      w="full"
      alignItems="center"
      justifyContent="space-between"
      bg="red.300"
    >
      <HStack spacing="8">
        <Link to="/">
          <Img
            width="50px"
            height="50px"
            objectFit="cover"
            src="/logo192.png"
          />
        </Link>
        <Flex
          as={Link}
          to={user ? "/create-product" : "/login"}
          alignItems="center"
          justifyContent="center"
          bg="white"
          borderRadius="100"
          height="50px"
          width="50px"
          boxShadow="medium"
        >
          +
        </Flex>
      </HStack>
      <HStack spacing="4">
        <Link to="/favourite">
          <Button>My Favourites</Button>
        </Link>
        <Link to="/myproducts">
          <Button>My Products</Button>
        </Link>
        <Link to="/products">
          <Button>Products</Button>
        </Link>
        {user ? (
          <>
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
            <Button onClick={signOut}>Sign Out</Button>
          </>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
