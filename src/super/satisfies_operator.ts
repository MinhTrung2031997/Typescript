export type ColorString = "red" | "blue" | "yellow" | "purple";
export type ColorRGB = [red: number, green: number, blue: number];
export type Color = ColorString | ColorRGB;

export type Theme = Record<string, Color>;
const theme = {
  primary: "red",
  secondary: [0, 255, 0],
  tertiary: "purple",
} satisfies Theme;

const [r, g, h] = theme.secondary;
