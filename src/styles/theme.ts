export const theme = {
  colors: {
    background: "#FAF9F5",
    backgroundAlt: "#F0EDE6",
    text: "#1A1D24",
    textMuted: "#5C606B",

    primary: "#FF4B3E",
    primaryHover: "#E63524",

    secondary: "#00B87C",
    secondaryHover: "#009C69",

    accent: "#3D5AFE",
    pop: "#FFC93C",

    glass: "rgba(255, 75, 62, 0.07)",
    glassBorder: "rgba(255, 255, 255, 0.5)",
    glassStrong: "rgba(255, 75, 62, 0.13)",
  },

  fonts: {
    display: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
  },

  radii: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    organic1: "62% 38% 55% 45% / 45% 55% 42% 58%",
    organic2: "38% 62% 45% 55% / 55% 42% 58% 45%",
    organic3: "50% 50% 62% 38% / 38% 62% 50% 50%",
  },

  shadows: {
    glass: "0 8px 32px rgba(255, 75, 62, 0.10)",
  },
} as const;

export type Theme = typeof theme;