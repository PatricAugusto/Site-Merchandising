"use client";

import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-3deg); }
  50% { transform: translateY(-14px) rotate(-1deg); }
`;

const HeroWrapper = styled.section`
  min-height: 100vh;
  padding: 140px 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 3rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding-top: 120px;
    text-align: center;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.05;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Subheadline = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 480px;

  @media (max-width: 860px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 860px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  padding: 0.9rem 1.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  padding: 0.9rem 1.75rem;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const GlassPanel = styled.div`
  position: relative;
  height: 420px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.glassStrong};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  animation: ${float} 6s ease-in-out infinite;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    height: 280px;
    animation: none;
  }
`;

const PanelLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <TextColumn>
        <Eyebrow>Branding aplicado</Eyebrow>
        <Headline>
          Sua marca, em <span>cada objeto</span> que fica na mão do cliente
        </Headline>
        <Subheadline>
          Desenvolvemos merchandising sob medida — do conceito à produção —
          pra transformar identidade de marca em algo que as pessoas realmente
          usam e guardam.
        </Subheadline>
        <CTAGroup>
          <PrimaryButton href="#contato">Solicitar orçamento</PrimaryButton>
          <SecondaryButton href="#produtos">Ver produtos</SecondaryButton>
        </CTAGroup>
      </TextColumn>

      <GlassPanel>
        <PanelLabel>[ preview de produto ]</PanelLabel>
      </GlassPanel>
    </HeroWrapper>
  );
}