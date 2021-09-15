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
  },
  colors: {
    grey: {
      100: "#c4c4c4",
<<<<<<< HEAD
      200: "#E5E5E5",
      300: "#FFFFFF",
      400: "#000",
=======
>>>>>>> 1627d7140e84e652165858fb55bfd585741c4b5b
    },
  },
});

export default theme;
