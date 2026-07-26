"use client";

import styled from "styled-components";
import { Sparkles, Factory, Truck, Recycle } from "lucide-react";

const AboutWrapper = styled.section`
  padding: 6rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  max-width: 640px;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Eyebrow = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.15;
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.subtle};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.elevated};
  }
`;

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.primarySoft};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.55;
`;

const differentials = [
  {
    icon: Sparkles,
    title: "Design sob medida",
    text: "Cada peça é pensada a partir da identidade visual do cliente, não adaptada de um catálogo genérico.",
  },
  {
    icon: Factory,
    title: "Produção própria",
    text: "Controle direto sobre qualidade e prazos, do protótipo ao lote final.",
  },
  {
    icon: Truck,
    title: "Logística nacional",
    text: "Entrega para todo o Brasil, com rastreio e prazos previsíveis para grandes volumes.",
  },
  {
    icon: Recycle,
    title: "Materiais sustentáveis",
    text: "Opções de produção com insumos reciclados e fornecedores certificados.",
  },
];

export default function About() {
  return (
    <AboutWrapper id="sobre">
      <SectionHeader>
        <Eyebrow>Quem somos</Eyebrow>
        <Title>Merchandising pensado como extensão da sua marca</Title>
        <Description>
          Trabalhamos com empresas que entendem que cada item físico com sua marca
          é um ponto de contato — e trata cada peça com esse cuidado.
        </Description>
      </SectionHeader>

      <Grid>
        {differentials.map(({ icon: Icon, title, text }) => (
          <Card key={title}>
            <IconWrapper>
              <Icon size={22} />
            </IconWrapper>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
          </Card>
        ))}
      </Grid>
    </AboutWrapper>
  );
}