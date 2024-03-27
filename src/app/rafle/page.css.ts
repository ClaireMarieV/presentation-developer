import { theme } from "@/ui/theme.css";
import { style } from "@vanilla-extract/css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.large,
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
});

export const button = style({
  all: "unset",
  background: theme.colors.background.accent,
  color: "black",
  ":hover": {
    background: "#33B074",
  },
  ":disabled": {
    cursor: "default",
    background: theme.colors.background.disabled,
    color: theme.colors.foreground.disabled,
  },
  fontWeight: 500,
  cursor: "pointer",
  padding: theme.spacing.medium,
  borderRadius: theme.borderRadius,
  transition: theme.transition,
});
