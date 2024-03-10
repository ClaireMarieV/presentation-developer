import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
});
