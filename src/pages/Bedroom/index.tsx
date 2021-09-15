import { Container } from "@chakra-ui/react";
import Header from "../Bedroom/Header";
import Images from "../Bedroom/Images";
import Search from "../Bedroom/Search";

const Bedroom = () => {
  return (
    <Container>
      <Header />
      <Images />
      <Search />
    </Container>
  );
};

export default Bedroom;
