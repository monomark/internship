import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'

const Header = () => (
    <Flex
        bgSize="cover"
        pr="12"
        alignItems="center"
        bgRepeat="no-repeat"
        bgPosition="center"
        justifyContent="flex-end"
        bgImage="url(https://images.unsplash.com/photo-1586864387789-628af9feed72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80)"
        style={{height: 'calc(100vh - 80px)'}}
        w="full">
        <Box
            p="4"
            w="600px"
            boxShadow="0 0 24 5 rgba(0,0,0,0.15)"
            borderRadius="8px"
            bg="white">
            <Heading
                mb="4"
                fontSize="4xl"
                as="h1">
                Welcome to Voshmiban
            </Heading>
            <Text>
                Menq ste ban chenq caxum
            </Text>
        </Box>
    </Flex>
)

export default Header
