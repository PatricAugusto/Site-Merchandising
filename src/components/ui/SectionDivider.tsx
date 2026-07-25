"use client";

import styled from "styled-components";

const DividerWrapper = styled.div<{ $flip?: boolean }>`
  width: 100%;
  line-height: 0;
  transform: ${({ $flip }) => ($flip ? "scaleX(-1)" : "none")};

  svg {
    width: 100%;
    height: 60px;
    display: block;
  }
`;

interface SectionDividerProps {
  flip?: boolean;
  color?: string;
}

export default function SectionDivider({ flip, color = "#EFEDE7" }: SectionDividerProps) {
  return (
    <DividerWrapper $flip={flip}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          d="M0,32 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </DividerWrapper>
  );
}