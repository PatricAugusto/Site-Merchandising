"use client";

import styled, { keyframes } from "styled-components";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  { id: "min-order", question: "Qual a quantidade mínima de pedido?", answer: "Trabalhamos a partir de 50 unidades por item, variando conforme o produto e a técnica de personalização." },
  { id: "lead-time", question: "Quanto tempo leva a produção?", answer: "Prazo médio de 10 a 20 dias úteis após aprovação da arte, dependendo do volume e complexidade do produto." },
  { id: "sample", question: "Vocês enviam amostra antes da produção em lote?", answer: "Sim, para pedidos acima de 500 unidades produzimos uma amostra física para aprovação antes de seguir com o lote completo." },
  { id: "colors", question: "É possível personalizar com logo em mais de uma cor?", answer: "Sim, dependendo da técnica (serigrafia, DTF, bordado, gravação a laser) conseguimos aplicar múltiplas cores sem custo adicional significativo." },
  { id: "coverage", question: "Atendem todo o Brasil?", answer: "Sim, produção centralizada em São Paulo com envio rastreado para todos os estados." },
];

const Wrapper = styled.section`
  padding: 6rem 2rem;
  max-width: 860px;
  margin: 0 auto;

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
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

const List = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled(Accordion.Item)`
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const Header = styled(Accordion.Header)`
  all: unset;
  display: flex;
`;

const Trigger = styled(Accordion.Trigger)`
  all: unset;
  width: 100%;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.25s ease;
  }

  &[data-state="open"] svg {
    transform: rotate(180deg);
  }
`;

const slideDown = keyframes`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
`;

const Content = styled(Accordion.Content)`
  overflow: hidden;

  &[data-state="open"] {
    animation: ${slideDown} 0.25s ease;
  }
  &[data-state="closed"] {
    animation: ${slideUp} 0.25s ease;
  }
`;

const AnswerText = styled.p`
  padding: 0 1.5rem 1.25rem;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

export default function FAQ() {
  return (
    <Wrapper id="faq">
      <ScrollReveal>
        <SectionHeader>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <Title>Perguntas que recebemos com frequência</Title>
        </SectionHeader>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <List type="single" defaultValue="min-order" collapsible>
          {faqs.map((faq) => (
            <Item key={faq.id} value={faq.id}>
              <Header>
                <Trigger>
                  {faq.question}
                  <ChevronDown size={20} />
                </Trigger>
              </Header>
              <Content>
                <AnswerText>{faq.answer}</AnswerText>
              </Content>
            </Item>
          ))}
        </List>
      </ScrollReveal>
    </Wrapper>
  );
}