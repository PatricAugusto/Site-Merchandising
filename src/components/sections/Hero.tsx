"use client";

import styled from "styled-components";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Tooltip } from "@/components/ui/Tooltip";

const HeroWrapper = styled.section`
  min-height: 100vh;
  padding: 140px 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1.1fr;
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

  @media (max-width: 860px) {
    align-items: center;
  }
`;

const Eyebrow = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Subheadline = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 440px;
  line-height: 1.6;

  @media (max-width: 860px) {
    max-width: 100%;
  }
`;

const PrimaryButton = styled.a`
  align-self: flex-start;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #1a1a1a;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.pill};
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }

  @media (max-width: 860px) {
    align-self: center;
  }
`;

const ImageCard = styled.div`
  position: relative;
  height: 480px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.elevated};
  border: 1px solid ${({ theme }) => theme.colors.border};

  img {
    object-fit: cover;
  }

  @media (max-width: 860px) {
    height: 320px;
  }
`;

const FloatingIcon = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <TextColumn>
        <Eyebrow>Nova coleção</Eyebrow>
        <Headline>
          Sua marca, em cada objeto que fica na mão do cliente
        </Headline>
        <Subheadline>
          Desenvolvemos merchandising sob medida — do conceito à produção — pra
          transformar identidade de marca em algo que as pessoas realmente usam
          e guardam.
        </Subheadline>
        <PrimaryButton href="#contato">Solicitar orçamento</PrimaryButton>
      </TextColumn>

      <ImageCard>
        <Image
          src="https://images.pexels.com/photos/19810840/pexels-photo-19810840.jpeg"
          alt="Detalhe de acabamento premium em produto personalizado"
          fill
          sizes="(max-width: 860px) 100vw, 40vw"
          priority
        />
        <Tooltip label="Favoritar produto">
          <FloatingIcon aria-label="Favoritar produto">
            <Heart size={20} />
          </FloatingIcon>
        </Tooltip>
      </ImageCard>
    </HeroWrapper>
  );
}
