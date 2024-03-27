import { style } from "@vanilla-extract/css";
import { theme } from "@/ui/theme.css";

export const layout = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing.large,
  background: "white",
  userSelect: "none",
});

export const debug = style({
  position: "absolute",
  left: 0,
  top: 0,
  padding: theme.spacing.medium,
});
