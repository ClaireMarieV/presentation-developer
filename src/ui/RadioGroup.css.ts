import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const group = style({
  all: "unset",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
});

export const label = style({
  fontWeight: 500,
  textWrap: "balance",
});

export const options = style({
  display: "flex",
  flexDirection: "column",
  border: theme.border,
  borderRadius: theme.borderRadius,
  overflow: "hidden",
});

const buttonBase = style({
  padding: theme.spacing.medium,
  cursor: "pointer",
  selectors: {
    "&:not(:first-of-type)": {
      borderTop: theme.border,
    },
  },
});

export const button = styleVariants({
  default: [
    buttonBase,
    {
      background: theme.colors.background.element,
      ":hover": {
        background: theme.colors.background.hover,
      },
    },
  ],
  checked: [buttonBase, { background: theme.colors.background.selected }],
});

export const input = style({
  display: "none",
});
