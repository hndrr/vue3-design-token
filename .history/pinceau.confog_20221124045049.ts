import { defineTheme } from "pinceau";

export default defineTheme({
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    xxl: "(min-width: 1536px)",
  },
  colors: {
    primary: {
      50: {
        initial: "{colors.orange.50}",
        dark: "{colors.orange.900}",
      },
    },
    orange: {
      50: "#ffe9d9",
      100: "#ffd3b3",
      200: "#ffbd8d",
      300: "#ffa666",
      400: "#ff9040",
      500: "#ff7a1a",
      600: "#e15e00",
      700: "#a94700",
      800: "#702f00",
      900: "#381800",
    },
  },
});
