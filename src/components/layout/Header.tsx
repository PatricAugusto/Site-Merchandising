"use client";

import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  box-shadow: ${({ theme }) => theme.shadows.glass};
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>Merchandising Co.</Logo>
      <Nav>
        <a href="#sobre">Sobre</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
      </Nav>
    </HeaderWrapper>
  );
}