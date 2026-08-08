"use client";

import styled from "styled-components";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DecorativeDots } from "@/components/ui/illustrations/DecorativeDots";
import { BriefingIcon, DesignIcon, ProductionIcon, DeliveryIcon } from "@/components/ui/illustrations/StepIcons";

const steps = [
  { icon: BriefingIcon, number: "01", title: "Briefing", text: "Entendemos sua marca, objetivo e público antes de sugerir qualquer produto." },
  { icon: DesignIcon, number: "02", title: "Design", text: "Criamos propostas visuais aplicadas aos produtos escolhidos, com ajustes até aprovação." },
  { icon: ProductionIcon, number: "03", title: "Produção", text: "Fabricação com acompanhamento de qualidade em cada lote." },
  { icon: DeliveryIcon, number: "04", title: "Entrega", text: "Envio rastreado para todo o Brasil, dentro do prazo combinado." },
];

const Wrapper = styled.section`
  position: relative;
  padding: 6rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
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
  gap: 0.9rem;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const Number = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
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
      <DecorativeDots color="#D9A94E" opacity={0.08} style={{ top: "-40px", right: "-60px" }} />

      <ScrollReveal>
        <SectionHeader>
          <Eyebrow>Processo</Eyebrow>
          <Title>Do briefing à entrega, sem surpresas</Title>
        </SectionHeader>
      </ScrollReveal>

      <StepsRow>
        {steps.map((step, index) => (
          <ScrollReveal key={step.number} delay={index * 0.1}>
            <StepCard>
              <IconWrapper>
                <step.icon size={36} />
              </IconWrapper>
              <Number>{step.number}</Number>
              <StepTitle>{step.title}</StepTitle>
              <StepText>{step.text}</StepText>
            </StepCard>
          </ScrollReveal>
        ))}
      </StepsRow>
    </Wrapper>
  );
}