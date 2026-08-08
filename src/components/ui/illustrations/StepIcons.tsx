interface IconProps {
  size?: number;
  color?: string;
}

export function BriefingIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M8 12h32a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H20l-8 8V32H8a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 20h20M14 25h13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DesignIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M30 8 40 18 18 40H8V30L30 8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M25 13 35 23" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function ProductionIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="10" y="18" width="20" height="20" rx="2" stroke={color} strokeWidth="1.5" />
      <path
        d="M34 22h4l4 5v7a2 2 0 0 1-2 2h-2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="40" r="2.5" stroke={color} strokeWidth="1.5" />
      <circle cx="36" cy="40" r="2.5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function DeliveryIcon({ size = 40, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M8 30 20 22 32 30 20 38 8 30Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 22V8M20 8 14 12M20 8 26 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 30v6l8-6-8-6" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}