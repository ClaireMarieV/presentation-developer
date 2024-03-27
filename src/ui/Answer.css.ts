import { createVar, style } from "@vanilla-extract/css";
import { theme } from "./theme.css";
import { calc } from "@vanilla-extract/css-utils";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
});

export const respondants = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  fontSize: "1.5rem",
});

export const question = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
});

export const questionHeader = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  fontWeight: 500,
});

export const answers = style({
  display: "flex",
  flexDirection: "column",
  border: theme.border,
  borderRadius: theme.borderRadius,
  overflow: "hidden",
});

export const percentage = createVar();

export const answer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing.medium,
  padding: theme.spacing.small,
  selectors: {
    "&:not(:first-of-type)": {
      borderTop: theme.border,
    },
  },
  position: "relative",
  "::after": {
    position: "absolute",
    content: " ",
    background: "#2F7C57",
    top: 0,
    left: 0,
    width: calc.multiply(percentage, "100%"),
    height: "100%",
  },
});

export const answerContent = style({
  zIndex: 1,
});
