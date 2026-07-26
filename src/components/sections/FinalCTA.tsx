"use client";

import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2rem 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const Banner = styled.div`
  padding: 4rem 2rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.elevated};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  max-width: 560px;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 480px;
`;

const CTAButton = styled.a`
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
      <Banner>
        <Title>Pronto para colocar sua marca em produtos que as pessoas realmente usam?</Title>
        <Subtitle>Fale com nosso time e receba uma proposta personalizada em até 1 dia útil.</Subtitle>
        <CTAButton href="#contato">Solicitar orçamento</CTAButton>
      </Banner>
    </Wrapper>
  );
}