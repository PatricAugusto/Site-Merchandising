"use client";

import styled from "styled-components";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "O prazo foi exatamente o combinado e a qualidade das canecas superou o que a gente esperava pro evento.",
    name: "Marina Costa",
    role: "Marketing, Cedro Corp",
  },
  {
    quote: "Conseguimos aplicar nossa identidade visual em cada peça sem perder consistência entre os itens do kit.",
    name: "Rafael Nogueira",
    role: "RH, Altiva",
  },
  {
    quote: "Time super acessível durante todo o processo, desde o orçamento até o pós-entrega.",
    name: "Juliana Prado",
    role: "Eventos, Bruma Tech",
  },
];

const Wrapper = styled.section`
  padding: 6rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  max-width: 640px;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.15;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  box-shadow: ${({ theme }) => theme.shadows.glass};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const QuoteIcon = styled(Quote)`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.4;
`;

const QuoteText = styled.p`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Role = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <Wrapper>
      <SectionHeader>
        <Eyebrow>Depoimentos</Eyebrow>
        <Title>Quem já usou, recomenda</Title>
      </SectionHeader>

      <Grid>
        {testimonials.map((t) => (
          <Card key={t.name}>
            <QuoteIcon size={28} />
            <QuoteText>{t.quote}</QuoteText>
            <Author>
              <Avatar>{getInitials(t.name)}</Avatar>
              <AuthorInfo>
                <Name>{t.name}</Name>
                <Role>{t.role}</Role>
              </AuthorInfo>
            </Author>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}