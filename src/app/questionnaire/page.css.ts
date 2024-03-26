import { theme } from "@/ui/theme.css";
import { style } from "@vanilla-extract/css";

export const page = style({
  background: theme.colors.background.default,
  color: theme.colors.foreground.default,

  minHeight: "100vh",
  padding: theme.spacing.large,
  boxSizing: "border-box",
});
