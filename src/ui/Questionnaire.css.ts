import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const questionnaire = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.large,
});
