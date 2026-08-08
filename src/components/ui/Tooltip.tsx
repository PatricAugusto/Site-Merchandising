"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styled, { keyframes } from "styled-components";
import { ReactNode } from "react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Content = styled(TooltipPrimitive.Content)`
  padding: 0.45rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.shadows.subtle};
  animation: ${fadeIn} 0.15s ease;
  z-index: 100;
`;

const Arrow = styled(TooltipPrimitive.Arrow)`
  fill: ${({ theme }) => theme.colors.surfaceRaised};
`;

interface TooltipProps {
  children: ReactNode;
  label: string;
}

export function Tooltip({ children, label }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <Content side="top" sideOffset={6}>
            {label}
            <Arrow width={10} height={5} />
          </Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}