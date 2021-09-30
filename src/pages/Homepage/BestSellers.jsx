import { Text, Stack, Container, Box } from '@chakra-ui/react';
import OtherCard from './OtherCard';
const Best = [
  { name: 'Аккумуляторная дрель-шуруповерт DEWALT DCD 771 C2', price: '2500' },
  {
    name: 'Инверторный сварочный аппарат Ресанта САИ190К 65/36',
    price: '5600',
  },
  { name: 'Инверторный сварочный аппарат Ресанта САИ190К', price: '4560' },
  { name: 'Инверторный сварочный аппарат  САИ190К', price: '11200' },
];

const BestSellers = () => {
  return (
    <Box mb="10" mt="10">
      <Container maxW="container.xl">
        <Text fontSize="2xl" as="b">
          Товары месяца
        </Text>
        <Stack mt="10" direction={{ base: 'column', sm: 'column', md: 'row' }}>
          {Best.map(item => (
            <OtherCard value={item} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
export default BestSellers;
