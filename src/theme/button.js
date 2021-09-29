export const button = {
  baseStyles: {
    borderRadius: "10px",
    textTransform: "uppercase",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    blue: {
      bg: "#3182CE",
      color: "#FFFFFF",
      textTransform: "uppercase",
    },
    red: {
      bg: "#E53E3E",
      color: "#FFFFFF",
      textTransform: "uppercase",
    },
    green: {
      bg: "#38A169",
      color: "#FFFFFF",
      textTransform: "uppercase",
    },

    gradient: {
      bg: "linear-gradient(88.21deg, #F72A80 9.41%, rgba(173, 11, 230, 0.5) 120.3%);",
      color: "#FFFFFF",
      textTransform: "uppercase",
    },

    transparent: {
      fontWeight: "bold",
      _focus: {
        boxShadow: "none",
      },
    },
  },
  sizes: {
    sm: { fontSize: "30px", lineHeight: "30px" },
    md: { width: "50px", height: "50px" },
    lg: {},
    xl: {},
  },
  defaultProps: {
    size: "md",
    variant: "transparent",
  },
};
