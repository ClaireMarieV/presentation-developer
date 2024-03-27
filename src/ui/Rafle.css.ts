import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const rafle = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
});

export const label = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
});

export const input = style({
  all: "unset",
  ":focus": {
    borderColor: theme.colors.foreground.accent,
  },
  outline: "none",
  padding: theme.spacing.medium,
  border: theme.border,
  borderRadius: theme.borderRadius,
});

export const button = style({
  all: "unset",
  background: theme.colors.background.accent,
  ":hover": {
    background: "#33B074",
  },
  ":disabled": {
    cursor: "default",
    background: theme.colors.background.disabled,
    color: theme.colors.foreground.disabled,
  },
  color: "black",
  fontWeight: 500,
  cursor: "pointer",
  padding: theme.spacing.medium,
  borderRadius: theme.borderRadius,
  transition: theme.transition,
});

export const error = style({
  color: "#EC5D5E",
});

export const description = style({
  fontSize: "1em",
});

export const link = style({
  all: "unset",
  cursor: "pointer",
  fontWeight: 500,
  color: theme.colors.foreground.accent,
  ":hover": {
    color: "#33B074",
  },
});
