"use client";

import styled from "styled-components";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DecorativeDots } from "@/components/ui/illustrations/DecorativeDots";

const Wrapper = styled.section`
  padding: 2rem 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const Banner = styled.div`
  position: relative;
  padding: 4rem 2rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.elevated};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const Title = styled.h2`
  position: relative;
  z-index: 1;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  max-width: 560px;
`;

const Subtitle = styled.p`
  position: relative;
  z-index: 1;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 480px;
`;

const CTAButton = styled.a`
  position: relative;
  z-index: 1;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #1a1a1a;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.pill};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;

export default function FinalCTA() {
  return (
    <Wrapper>
      <ScrollReveal>
        <Banner>
          <DecorativeDots color="#D9A94E" opacity={0.1} style={{ top: "-30px", left: "-30px" }} />
          <DecorativeDots color="#D9A94E" opacity={0.1} style={{ bottom: "-30px", right: "-30px" }} />

          <Title>Pronto para colocar sua marca em produtos que as pessoas realmente usam?</Title>
          <Subtitle>Fale com nosso time e receba uma proposta personalizada em até 1 dia útil.</Subtitle>
          <CTAButton href="#contato">Solicitar orçamento</CTAButton>
        </Banner>
      </ScrollReveal>
    </Wrapper>
  );
}