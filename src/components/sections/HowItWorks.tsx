"use client";

import styled from "styled-components";

const steps = [
  { number: "01", title: "Briefing", text: "Entendemos sua marca, objetivo e público antes de sugerir qualquer produto." },
  { number: "02", title: "Design", text: "Criamos propostas visuais aplicadas aos produtos escolhidos, com ajustes até aprovação." },
  { number: "03", title: "Produção", text: "Fabricação com acompanhamento de qualidade em cada lote." },
  { number: "04", title: "Entrega", text: "Envio rastreado para todo o Brasil, dentro do prazo combinado." },
];

const Wrapper = styled.section`
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

const StepsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  padding: 2rem 1.5rem;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.subtle};

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Number = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const StepText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.55;
`;

export default function HowItWorks() {
  return (
    <Wrapper id="como-funciona">
      <SectionHeader>
        <Eyebrow>Processo</Eyebrow>
        <Title>Do briefing à entrega, sem surpresas</Title>
      </SectionHeader>

      <StepsRow>
        {steps.map((step) => (
          <StepCard key={step.number}>
            <Number>{step.number}</Number>
            <StepTitle>{step.title}</StepTitle>
            <StepText>{step.text}</StepText>
          </StepCard>
        ))}
      </StepsRow>
    </Wrapper>
  );
}