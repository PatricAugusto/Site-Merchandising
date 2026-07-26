export const theme = {
  colors: {
    background: "#141414",
    backgroundAlt: "#1C1C1C",
    surface: "#1F1F1F",
    surfaceRaised: "#262626",

    text: "#F5F3EE",
    textMuted: "#9B9892",
    border: "rgba(255, 255, 255, 0.07)",

    primary: "#D9A94E",
    primaryHover: "#C79A3E",
    primarySoft: "rgba(217, 169, 78, 0.14)",

    secondary: "#8C8880",
  },

  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', sans-serif",
  },

  radii: {
    sm: "10px",
    md: "20px",
    lg: "28px",
    pill: "999px",
  },

  shadows: {
    elevated: "0 24px 60px rgba(0, 0, 0, 0.5)",
    subtle: "0 8px 24px rgba(0, 0, 0, 0.35)",
  },
} as const;

export type Theme = typeof theme;
