"use client";

import styled from "styled-components";

const clients = ["Norvatis", "Cedro Corp", "Altiva", "Bruma Tech", "Solano & Cia", "Vetria"];

const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const Label = styled.p`
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 2rem;
`;

const LogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem 3rem;
`;

const Wordmark = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.55;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default function Clients() {
  return (
    <Wrapper>
      <Label>Empresas que já confiaram na gente</Label>
      <LogoRow>
        {clients.map((name) => (
          <Wordmark key={name}>{name}</Wordmark>
        ))}
      </LogoRow>
    </Wrapper>
  );
}