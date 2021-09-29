import { extendTheme } from "@chakra-ui/react";
import { button } from "./Button";
import { input } from "./input";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: '1rem',
        color: '#000',
        },
      },
    },
  fonts: {
    body: "Ephesis, sans-serif",
    heading: "Ephesis, sans-serif",
  },
  components: {
    Select: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
    Input: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
  },
  fontSizes: {
    xs: "0.625rem",
    sm: "0.75rem",
    md: "0.875rem",
    lg: "1rem",
    xl: "1.125rem",
    "2xl": "1.25rem",
    "3xl": "1.5rem",
    "4xl": "2.0rem",
  },
});

export default theme;
