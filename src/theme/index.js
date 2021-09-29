import { extendTheme } from "@chakra-ui/react";
import { button } from "./Button";
import { input } from "./input";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: {},
      },
    },
  },

  fonts: {
    body: "Ephesis",
    heading: "Ephesis",
  },
  components: {
    Select: {
      baseStyle: {},
    },
    Input: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
  },
});

export default theme;
