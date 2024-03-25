import { createTheme } from "@vanilla-extract/css";

export const [themClass, theme] = createTheme({
  spacing: {
    medium: "1vh",
    large: "5vh",
  },
  transition: "all .2s, font-weight .1s",
  border: "solid 1px #222222",
  borderRadius: "0.8rem",
  colors: {
    background: {
      default: "#111111",
    },
    foreground: {
      default: "white",
    },
  },
});
