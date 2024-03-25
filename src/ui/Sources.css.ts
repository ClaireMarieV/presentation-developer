import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
  alignItems: "flex-start",
  fontSize: "0.6rem",

  position: "absolute",
  bottom: 0,
  left: 0,
  padding: theme.spacing.medium,
});

export const title = style({
  all: "unset",
  fontWeight: 500,
});

export const sources = style({
  all: "unset",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const source = style({
  all: "unset",
});
