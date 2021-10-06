import { Box, Image} from '@chakra-ui/react';


function OtherCard(props) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: 'lg' }}>
      <Image src="/assets/images/stock-photo.jpg" alt={props.value.price} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.value.name}
        </Box>

        <Box>
          {props.value.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / ֏
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default OtherCard;
