"use client";

import { useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Qual a quantidade mínima de pedido?", answer: "Trabalhamos a partir de 50 unidades por item, variando conforme o produto e a técnica de personalização." },
  { question: "Quanto tempo leva a produção?", answer: "Prazo médio de 10 a 20 dias úteis após aprovação da arte, dependendo do volume e complexidade do produto." },
  { question: "Vocês enviam amostra antes da produção em lote?", answer: "Sim, para pedidos acima de 500 unidades produzimos uma amostra física para aprovação antes de seguir com o lote completo." },
  { question: "É possível personalizar com logo em mais de uma cor?", answer: "Sim, dependendo da técnica (serigrafia, DTF, bordado, gravação a laser) conseguimos aplicar múltiplas cores sem custo adicional significativo." },
  { question: "Atendem todo o Brasil?", answer: "Sim, produção centralizada em São Paulo com envio rastreado para todos os estados." },
];

const Wrapper = styled.section`
  padding: 6rem 2rem;
  max-width: 860px;
  margin: 0 auto;
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

const ChevronIcon = styled(ChevronDown)<{ $open: boolean }>`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.25s ease;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`;

const AnswerWrapper = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease;
`;

const AnswerInner = styled.div`
  overflow: hidden;
`;

const AnswerText = styled.p`
  padding: 0 1.5rem 1.25rem;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <Wrapper id="faq">
      <SectionHeader>
        <Eyebrow>Dúvidas frequentes</Eyebrow>
        <Title>Perguntas que recebemos com frequência</Title>
      </SectionHeader>

      <List>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Item key={faq.question}>
              <QuestionButton
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <ChevronIcon size={20} $open={isOpen} />
              </QuestionButton>
              <AnswerWrapper $open={isOpen} id={`faq-answer-${index}`}>
                <AnswerInner>
                  <AnswerText>{faq.answer}</AnswerText>
                </AnswerInner>
              </AnswerWrapper>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}