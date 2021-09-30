import React from 'react'
import {
    Text,Image, Container,
} from '@chakra-ui/react'
import { useUser } from '../../hooks'
import SelectBar from './SelectBar';
import Photo from './stock-photo.jpg';
import BestSellers from './BestSellers';
import NewArrivals from './NewArrivals';
import Subs from './Subs';
const Homepage = () => {
    const { user } = useUser()
    return (
        <>
            <Text>
                hello {user.name}
            </Text>
            
      <SelectBar />
      <Container maxW="container.xl"
      mt="5" minH="100vh" >
        <Image src={Photo} w="full" h="500" />
        <BestSellers />
      
        <NewArrivals/>
     
      </Container>
      <Subs/>
    </>
        
    )
}

export default Homepage
