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
      variants: {
        error: {
          fontSize: "1rem",
          color: "#C53030",
          _before: { content: "'⚠'", pr: "0.5rem" },
        },
      },
    },
  },

  colors: {
    100: "#c4c4c4",
    200: "#FFFFFF",
    300: "#000000",
    400: "#616161",
    500: "#3C3C3C",
    600: "#E5E5E5",
    700: "#C4C4C4",
  },
});

export default theme;
