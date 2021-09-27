import {
    HStack,
    Flex,
    Button,
    Img
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Flex
            px="60px"
            height="80px"
            w="full"
            alignItems="center"
            justifyContent="space-between"
            bg="red.300">
            <Img
                width="50px"
                height="50px"
                objectFit="cover"
                src="/logo192.png"/>
            <HStack spacing="4">
                <Link to="/products">
                    <Button>
                        Products
                    </Button>
                </Link>
                <Link to="/profile">
                    <Button>
                        Profile
                    </Button>
                </Link>
                <Link to="/login">
                    <Button>
                        Login
                    </Button> 
                </Link>
            </HStack>
        </Flex>
    )
}

export default Navbar
