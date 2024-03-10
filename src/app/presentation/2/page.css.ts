import { theme } from "@/ui/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const emphasisBase = style({
  all: "unset",
  transition: theme.transition,
});

export const emphasis = styleVariants({
  off: [emphasisBase, { fontWeight: 400 }],
  on: [emphasisBase, { fontWeight: 600 }],
});
