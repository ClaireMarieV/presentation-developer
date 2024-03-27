import { createTheme } from "@vanilla-extract/css";

export const [themClass, theme] = createTheme({
  spacing: {
    small: "0.6vh",
    medium: "1.4vh",
    large: "5vh",
  },
  transition: "all .2s, font-weight .1s",
  border: "solid 1px #3A3A3A",
  borderRadius: "0.8rem",
  colors: {
    background: {
      default: "#111111",
      element: "#191919",
      selected: "#222222",
      hover: "#2A2A2A",
      accent: "#30A46C",
      disabled: "#B4B4B4",
    },
    foreground: {
      default: "white",
      accent: "#30A46C",
      disabled: "#484848",
    },
  },
});
