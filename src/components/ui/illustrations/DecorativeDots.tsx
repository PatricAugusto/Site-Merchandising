import { CSSProperties, useId } from "react";

interface DecorativeDotsProps {
  color?: string;
  opacity?: number;
  style?: CSSProperties;
}

export function DecorativeDots({ color = "#D9A94E", opacity = 0.15, style }: DecorativeDotsProps) {
  const patternId = useId();

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
    >
      <defs>
        <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill={color} opacity={opacity} />
        </pattern>
      </defs>
      <rect width="200" height="200" fill={`url(#${patternId})`} />
    </svg>
  );
}