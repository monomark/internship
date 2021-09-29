export const Button = {
  baseStyles: {
    borderRadius: "10px",
    textTransform: "uppercase",
    color: "#FFFFFF",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    blue: {
      bg: "#3182CE",
    },
    red: {
      bg: "#E53E3E",
    },
    green: {
      bg: "#38A169",
    },

    gradient: {
      bg: "linear-gradient(88.21deg, #F72A80 9.41%, rgba(173, 11, 230, 0.5) 120.3%);",
      textTransform: "uppercase",
    },

    transparent: {
      fontWeight: "bold",
    },
  },
  sizes: {
    sm: { fontSize: "0.875rem", height: '30px' },
    md: { height: "50px", fontSize: '1rem' },
    lg: {},
    xl: {},
  },
  defaultProps: {
    size: "md",
    variant: "transparent",
  },
};
