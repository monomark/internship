import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#3C3C3C",
        color: "#000",
      },
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  components: {
    Button,
    FormLabel: {
      baseStyle: {
        fontWeight: "bold",
        fontSize: "15px",
        lineHeight: "18px",
        color: "#616161",
        textTransform: "uppercase",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "30px",
        color: "#3C3C3C",
      },
    },
  },
  colors: {
    grey: {
      100: "#c4c4c4",
    },
  },
});

export default theme;
