"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { MorphBlob } from "@/components/ui/MorphBlob";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
`;

const morphShape = keyframes`
  0%, 100% { border-radius: 62% 38% 55% 45% / 45% 55% 42% 58%; }
  50% { border-radius: 45% 55% 38% 62% / 55% 42% 58% 45%; }
`;

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 140px 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;

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
  position: relative;
  z-index: 2;
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
  transition:
    background 0.2s ease,
    transform 0.2s ease;

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

const BlobFrame = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 440px;
  overflow: hidden;
  animation:
    ${float} 6s ease-in-out infinite,
    ${morphShape} 12s ease-in-out infinite;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  box-shadow: ${({ theme }) => theme.shadows.glass};

  img {
    object-fit: cover;
  }

  @media (max-width: 860px) {
    height: 300px;
    animation: none;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <MorphBlob $size="360px" style={{ top: "-80px", left: "-100px" }} />
      <MorphBlob
        $size="260px"
        $color="rgba(0, 184, 124, 0.14)"
        $duration="14s"
        style={{ bottom: "-60px", right: "20%" }}
      />

      <TextColumn>
        <Eyebrow>Branding aplicado</Eyebrow>
        <Headline>
          Sua marca, em <span>cada objeto</span> que fica na mão do cliente
        </Headline>
        <Subheadline>
          Desenvolvemos merchandising sob medida — do conceito à produção — pra
          transformar identidade de marca em algo que as pessoas realmente usam
          e guardam.
        </Subheadline>
        <CTAGroup>
          <PrimaryButton href="#contato">Solicitar orçamento</PrimaryButton>
          <SecondaryButton href="#produtos">Ver produtos</SecondaryButton>
        </CTAGroup>
      </TextColumn>

      <BlobFrame>
        <Image
          src="https://images.pexels.com/photos/COLE-O-ID-AQUI/pexels-photo.jpeg"
          alt="Produtos de merchandising personalizados"
          fill
          sizes="(max-width: 860px) 100vw, 40vw"
          priority
        />
      </BlobFrame>
    </HeroWrapper>
  );
}
