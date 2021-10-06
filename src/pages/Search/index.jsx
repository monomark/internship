import { Container, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Products from "./Products";
import SelectForm from "./SelectForm";

const Search = () => {
  const { register, watch, getValues, setValue } = useForm();

  const search = watch("search", "");
  const type = watch("type", "");
  const price = watch("price", "");

  return (
    <Container maxW="container.xl" m="5" minH="100vh">
      <Stack spacing="8">
        <Header setValue={setValue} getValues={getValues} register={register} />
        <SelectForm register={register} />
        <Products price={price} type={type} search={search} />
      </Stack>
    </Container>
  );
};

export default Search;
