import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", { margin: 0, padding: 0 });

globalStyle("h1, h2, h3, h4, h5, h6, p", {
  margin: 0,
  padding: 0,
});

globalStyle("ul, li", {
  all: "unset",
  display: "flex",
  flexDirection: "column",
});

globalStyle("li", {
  display: "block",
});

globalStyle("h1", {
  fontSize: "4vh",
  textWrap: "balance",
});

globalStyle("h2", {
  fontSize: "3vh",
  textWrap: "balance",
});

globalStyle("p", {
  fontSize: "2vh",
  textWrap: "balance",
});
