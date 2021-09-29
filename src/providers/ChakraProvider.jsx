import React from 'react'
import {
    ChakraProvider as Chakra
} from '@chakra-ui/react'
import theme from '../theme'


const ChakraProvider = ({children}) => (
    <Chakra
        theme={theme}>
            {children}
    </Chakra>
)

export default ChakraProvider
