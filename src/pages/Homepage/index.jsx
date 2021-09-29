import React from 'react'
import {
    Text,
} from '@chakra-ui/react'
import { useUser } from '../../hooks'

const Homepage = () => {
    const { user } = useUser()
    return (
        <>
            <Text>
                hello {user.email}
            </Text>
        </>
    )
}

export default Homepage
