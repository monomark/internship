import { Container, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Products from "./Products";
import SelectForm from "./SelectForm";

const Search = () => {
  const { register, watch, getValues, setValue } = useForm();

  const search = watch("search", "");

  return (
    <Container maxW="container.xl" m="5" minH="100vh">
      <Stack spacing="8">
        <Header setValue={setValue} getValues={getValues} register={register} />
        <SelectForm register={register} />
        <Products search={search} />
      </Stack>
    </Container>
  );
};

export default Search;
