"use client";

import styled, { keyframes } from "styled-components";

const morph = keyframes`
  0%, 100% {
    border-radius: 62% 38% 55% 45% / 45% 55% 42% 58%;
  }
  33% {
    border-radius: 45% 55% 62% 38% / 55% 45% 58% 42%;
  }
  66% {
    border-radius: 55% 45% 38% 62% / 42% 58% 45% 55%;
  }
`;

interface MorphBlobProps {
  $size?: string;
  $color?: string;
  $duration?: string;
}

export const MorphBlob = styled.div<MorphBlobProps>`
  position: absolute;
  width: ${({ $size }) => $size || "400px"};
  height: ${({ $size }) => $size || "400px"};
  background: ${({ $color, theme }) => $color || theme.colors.glassStrong};
  filter: blur(2px);
  animation: ${morph} ${({ $duration }) => $duration || "10s"} ease-in-out infinite;
  pointer-events: none;
  z-index: -1;
`;