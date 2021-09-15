import { Flex, Container, Box } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Pics from "./Pics";
import Pics2 from "./Pics2";
import Pics3 from "./Pics3";
import Header from "./Header";
import OnCllickKitchen from "./OnClikKitchen";

const Catalogue = () => {
  return (
    <Container maxW="6xl">
      <Header />
      <Buttons />
      {
        <Switch>
          <Route path="/catalogue/kitchen" component={OnCllickKitchen} />
        </Switch>
      }

      <Box pt="16">
        <Flex alignItems="center" justifyContent="space-between">
          <Pics />
          <Pics2 />
          <Pics3 />
        </Flex>
      </Box>
      <Footer />
    </Container>
  );
};

export default Catalogue;
