import React from "react"
import {
  HStack,
  Input,
} from "@chakra-ui/react"

const Header = ({register}) => (
  <HStack spacing="6">
      <Input
        type="search"
        {...register('search')}
        placeholder="Type something"
        w="50%"
      />
  </HStack>
)

export default Header
