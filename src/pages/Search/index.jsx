import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Price from "./Price";
import Select from "./Select";

const App = () => {
  return (
    <Container maxW="container.xl" m="5" minH="100vh">
      <Header />
      <Select />
      <Price />
    </Container>
  );
};

export default App;
