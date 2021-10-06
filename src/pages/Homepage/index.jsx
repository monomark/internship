import React from 'react'
import {
    Container,
} from '@chakra-ui/react'
import BestSellers from './BestSellers';
import NewArrivals from './NewArrivals';
import Subs from './Subs';
import Header from './Header';

const Homepage = () => {
    return (
        <>
            <Header/>
            <Container
                maxW="container.xl"
                mt="5">
                <BestSellers />
                <NewArrivals/>
            </Container>
            <Subs/>
        </>  
    )
}

export default Homepage
