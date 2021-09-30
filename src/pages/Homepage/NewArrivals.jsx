import { Text, Container, Box , Stack} from '@chakra-ui/react';

import OtherCard from "./OtherCard"
const Best = [
  { name: 'Аккумуляторная дрель-шуруповерт DEWALT DCD 771 C2', price: '2500' },
  {
    name: 'Инверторный сварочный аппарат Ресанта САИ190К ',
    price: '5600',
  },
  { name: 'Инверторный сварочный аппарат Ресанта САИ190К', price: '4560' },
];

const NewArrivals = () => {
  return (
    <Box  >
      <Container maxW="container.xl">
        <Text fontSize="2xl" as="b">
          Популярные категории
        </Text>
        
        <Stack mt="10" direction={{ base: "column", sm: "column", md: "row" }}  >
          {Best.map(item => (
            <OtherCard value={item} />
          ))}
        </Stack>
       
      </Container>
    </Box>
  );
};
export default NewArrivals;
