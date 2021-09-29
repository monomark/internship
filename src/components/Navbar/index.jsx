import {
    HStack,
    Flex,
    Button,
    Img
} from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks'

const Navbar = () => {
    const { user, setUserObject } = useUser()
    const signOut = async () => {
        setUserObject({user: '', loading: false})
        Auth.signOut()
    }
    

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
                {
                    user ? (
                        <>
                            <Link to="/profile">
                                <Button>
                                    Profile
                                </Button> 
                            </Link>
                            <Button onClick={signOut}>
                                Sign Out
                            </Button> 
                        </>
                    ) : (
                        <Link to="/login">
                            <Button>
                                Login
                            </Button> 
                        </Link>
                    )
                }
            </HStack>
        </Flex>
    )
}

export default Navbar
