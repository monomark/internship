import { Select, HStack } from "@chakra-ui/react"

const SelectForm = ({register}) => {
  return (
    <HStack>
      <Select
        {...register('type')}
        placeholder="Type"
        w="200px"
        h="40px">
        <option value="wood">Wood</option>
        <option value="metal">Metal</option>
        <option value="plastic">Plastic</option>
        <option value="other">other</option>
      </Select>
      <Select
        {...register('price')}
        placeholder="Price"
        w="200px"
        h="40px">
        <option value="free">free</option>
        <option value="low">1 - 5,000 AMD</option>
        <option value="medium">5000 - 20,000 AMD</option>
        <option value="hight">20,000 +</option>
      </Select>
    </HStack>
  )
}

export default SelectForm
