import { theme } from "@/ui/theme.css";
import { style } from "@vanilla-extract/css";

export const page = style({
  background: theme.colors.background.default,
  color: theme.colors.foreground.default,
  width: "100vw",
  height: "100vh",
  boxSizing: "border-box",
  padding: theme.spacing.large,

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gap: theme.spacing.large,
});

const box = style({
  border: theme.border,
  borderRadius: theme.borderRadius,
  background: theme.colors.background.element,
});

export const notes = style([
  box,
  {
    gridColumn: "1 / span 2",
    padding: theme.spacing.medium,
    fontSize: "1.5rem",
  },
]);

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
});

const iframe = style([
  box,
  {
    width: "100%",
    height: "100%",
  },
]);

export const current = style([iframe, {}]);

export const next = style([iframe, {}]);
