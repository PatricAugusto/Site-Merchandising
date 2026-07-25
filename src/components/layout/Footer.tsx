"use client";

import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 3rem 2rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copy = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copy>© {new Date().getFullYear()} Merchandising Co. Todos os direitos reservados.</Copy>
        <Copy>Feito com Next.js</Copy>
      </FooterContent>
    </FooterWrapper>
  );
}