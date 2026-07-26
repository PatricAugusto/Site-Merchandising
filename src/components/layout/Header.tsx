"use client";

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Menu, X } from "lucide-react";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;

  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.02em;
  z-index: 60;
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.4rem;

  a {
    padding: 0.55rem 1.1rem;
    border-radius: ${({ theme }) => theme.radii.pill};
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.surfaceRaised};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: 60;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Backdrop = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 54;
    background: rgba(0, 0, 0, 0.55);
    animation: ${keyframes`from{opacity:0} to{opacity:1}`} 0.2s ease;
  }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const FloatingPanel = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 76px;
    right: 1rem;
    z-index: 55;

    min-width: 220px;
    padding: 1.5rem;
    border-radius: ${({ theme }) => theme.radii.md};

    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.elevated};

    animation: ${slideIn} 0.25s ease;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  a {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.05rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#produtos", label: "Produtos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <HeaderWrapper>
      <Logo>Merchandising Co.</Logo>

      <Nav aria-label="Navegação principal">
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </Nav>

      <MenuButton
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </MenuButton>

      {isOpen && (
        <>
          <Backdrop onClick={() => setIsOpen(false)} />
          <FloatingPanel id="mobile-menu">
            <MobileNav aria-label="Navegação mobile">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => setIsOpen(false)}>
                  {label}
                </a>
              ))}
            </MobileNav>
          </FloatingPanel>
        </>
      )}
    </HeaderWrapper>
  );
}