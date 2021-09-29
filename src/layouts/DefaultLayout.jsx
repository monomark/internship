import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const DefaultLayout = ({children}) => (
    <Box
        minHeight="100vh"
        width="100%">
        <Navbar/>
        {children}
    </Box>
)

export default DefaultLayout

