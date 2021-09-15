import {
    ReactNode,
} from 'react'
import {
    Flex,
    Container,
    Box,
} from '@chakra-ui/react'

const AuthLayout = ({children}: {children: ReactNode}) => (
    <Flex
      align="center"
      justifyContent="center"
      minH="100vh" py="8">
      <Container bg="grey.100" p="3rem">
      <Box bg="grey.200" p="2rem">
        {children}
        </Box>
      </Container>
    </Flex>
)

export default AuthLayout
