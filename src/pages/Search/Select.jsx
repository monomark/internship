import { Select, HStack } from "@chakra-ui/react";

const select = () => {
  return (
    <HStack>
      <Select placeholder="Tools" w="200px" h="40px">
        <option> first </option>
        <option> second </option>
        <option> third </option>
        <option> forth </option>
      </Select>
    </HStack>
  );
};

export default select;
