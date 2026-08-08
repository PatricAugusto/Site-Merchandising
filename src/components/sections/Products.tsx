"use client";

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Tooltip } from "@/components/ui/Tooltip";

const categories = ["Todos", "Vestuário", "Escritório", "Brindes", "Ecobag"] as const;
type Category = (typeof categories)[number];

interface Product {
  name: string;
  category: Exclude<Category, "Todos">;
  description: string;
  image: string;
}

const products: Product[] = [
  { name: "Camiseta Premium", category: "Vestuário", description: "Algodão penteado, estampa personalizada em silk ou DTF.", image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg" },
  { name: "Caderno Executivo", category: "Escritório", description: "Capa em couro sintético, gravação a laser da marca.", image: "https://images.pexels.com/photos/1083728/pexels-photo-1083728.jpeg" },
  { name: "Caneca Térmica", category: "Brindes", description: "Aço inox, dupla parede, logo em UV de alta durabilidade.", image: "https://images.pexels.com/photos/2274257/pexels-photo-2274257.jpeg" },
  { name: "Sacola Ecológica", category: "Ecobag", description: "Algodão cru, estampa em serigrafia, produção sustentável.", image: "https://images.pexels.com/photos/1359854/pexels-photo-1359854.jpeg" },
  { name: "Boné Aba Reta", category: "Vestuário", description: "Bordado 3D, ajuste em fivela metálica.", image: "https://images.pexels.com/photos/8217483/pexels-photo-8217483.jpeg" },
  { name: "Squeeze Personalizada", category: "Brindes", description: "Plástico livre de BPA, tampa com trava de segurança.", image: "https://images.pexels.com/photos/8146451/pexels-photo-8146451.jpeg" },
];

const ProductsWrapper = styled.section`
  padding: 6rem 2rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;
  }
`;

const SectionHeader = styled.div`
  max-width: 640px;
  margin-bottom: 2.5rem;
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

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const FilterPill = styled.button<{ $active: boolean }>`
  padding: 0.55rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  background: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, $active }) => ($active ? "#1a1a1a" : theme.colors.textMuted)};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.subtle};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.elevated};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  height: 200px;
  width: 100%;

  img {
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CategoryBadge = styled.span`
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  cursor: help;
`;

const ProductName = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 90;
  animation: ${overlayShow} 0.2s ease;
`;

const contentShow = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 91;

  width: min(560px, calc(100vw - 2.5rem));
  max-height: 85vh;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.elevated};
  animation: ${contentShow} 0.2s ease;

  &:focus-visible {
    outline: none;
  }
`;

const ModalImageFrame = styled.div`
  position: relative;
  height: 260px;
  width: 100%;

  img {
    object-fit: cover;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ModalTitle = styled(Dialog.Title)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const ModalDescription = styled(Dialog.Description)`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceRaised};
  }
`;

const CTAButton = styled.a`
  margin-top: 0.5rem;
  align-self: flex-start;
  padding: 0.85rem 1.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #1a1a1a;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.pill};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <ProductsWrapper id="produtos">
      <ScrollReveal>
        <SectionHeader>
          <Eyebrow>Catálogo</Eyebrow>
          <Title>Peças que carregam sua marca no dia a dia</Title>
        </SectionHeader>
      </ScrollReveal>

      <FilterBar>
        {categories.map((category) => (
          <FilterPill
            key={category}
            $active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </FilterPill>
        ))}
      </FilterBar>

      <Dialog.Root open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <Grid>
          {filteredProducts.map((product, index) => (
            <ScrollReveal key={product.name} delay={(index % 3) * 0.1}>
              <Card onClick={() => setSelectedProduct(product)}>
                <ImageFrame>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </ImageFrame>
                <CardBody>
                  <Tooltip label={`Filtrar por ${product.category}`}>
                    <CategoryBadge
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategory(product.category);
                      }}
                    >
                      {product.category}
                    </CategoryBadge>
                  </Tooltip>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>{product.description}</ProductDescription>
                </CardBody>
              </Card>
            </ScrollReveal>
          ))}
        </Grid>

        <Dialog.Portal>
          <Overlay />
          {selectedProduct && (
            <Content>
              <CloseButton aria-label="Fechar">
                <X size={18} />
              </CloseButton>
              <ModalImageFrame>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="560px"
                />
              </ModalImageFrame>
              <ModalBody>
                <CategoryBadge>{selectedProduct.category}</CategoryBadge>
                <ModalTitle>{selectedProduct.name}</ModalTitle>
                <ModalDescription>{selectedProduct.description}</ModalDescription>
                <CTAButton href="#contato" onClick={() => setSelectedProduct(null)}>
                  Solicitar orçamento
                </CTAButton>
              </ModalBody>
            </Content>
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </ProductsWrapper>
  );
}