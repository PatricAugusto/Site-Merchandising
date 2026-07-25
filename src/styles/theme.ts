export const theme = {
  colors: {
    background: "#F7F6F2",
    backgroundAlt: "#EFEDE7",
    text: "#1C1F26",
    textMuted: "#5B5F6B",

    primary: "#3E6FF2",
    primaryHover: "#2E56C7",

    secondary: "#3F6857",
    accent: "#D98B4A",

    glass: "rgba(169, 199, 216, 0.18)",
    glassBorder: "rgba(255, 255, 255, 0.4)",
    glassStrong: "rgba(169, 199, 216, 0.28)",
  },

  fonts: {
    display: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
  },

  radii: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },

  shadows: {
    glass: "0 8px 32px rgba(31, 38, 135, 0.12)",
  },
} as const;

export type Theme = typeof theme;