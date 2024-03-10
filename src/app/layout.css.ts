import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", { margin: 0, padding: 0 });

globalStyle("h1, h2, h3, h4, h5, h6, p", {
  margin: 0,
  padding: 0,
});

globalStyle("h1", {
  fontSize: "4vh",
  textWrap: "balance",
});
