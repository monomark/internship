export const Button = {
  baseStyles: {
    borderRadius: "10px",
    textTransform: "uppercase",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    pink: {
      bg: "#F62A80",
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
    solid: {
      height: "40px",
      width: "100px",
    },
  },
  sizes: {
    sm: { fontSize: "30px", lineHeight: "37px" },
    md: { width: "182px", height: "39px" },
    lg: {},
    xl: {},
  },
  defaultProps: {
    size: "md",
    variant: "transparent",
  },
};
