import { createTheme } from "@vanilla-extract/css";

export const [themClass, theme] = createTheme({
  spacing: {
    medium: "1vh",
    large: "5vh",
  },
  transition: "all .2s, font-weight .1s",
});
