"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles/theme";

const categories = ["Todos", "Vestuário", "Escritório", "Brindes", "Ecobag"] as const;
type Category = (typeof categories)[number];

interface Product {
  name: string;
  category: Exclude<Category, "Todos">;
  description: string;
  image: string;
}

const products: Product[] = [
  { name: "Camiseta Premium", category: "Vestuário", description: "Algodão penteado, estampa personalizada em silk ou DTF.", image: "https://images.pexels.com/photos/COLE-ID-1/pexels-photo.jpeg" },
  { name: "Caderno Executivo", category: "Escritório", description: "Capa em couro sintético, gravação a laser da marca.", image: "https://images.pexels.com/photos/COLE-ID-2/pexels-photo.jpeg" },
  { name: "Caneca Térmica", category: "Brindes", description: "Aço inox, dupla parede, logo em UV de alta durabilidade.", image: "https://images.pexels.com/photos/COLE-ID-3/pexels-photo.jpeg" },
  { name: "Sacola Ecológica", category: "Ecobag", description: "Algodão cru, estampa em serigrafia, produção sustentável.", image: "https://images.pexels.com/photos/COLE-ID-4/pexels-photo.jpeg" },
  { name: "Boné Aba Reta", category: "Vestuário", description: "Bordado 3D, ajuste em fivela metálica.", image: "https://images.pexels.com/photos/COLE-ID-5/pexels-photo.jpeg" },
  { name: "Squeeze Personalizada", category: "Brindes", description: "Plástico livre de BPA, tampa com trava de segurança.", image: "https://images.pexels.com/photos/COLE-ID-6/pexels-photo.jpeg" },
];

// raios orgânicos usados de forma alternada entre os cards
const radiusOptions = [theme.radii.organic1, theme.radii.organic2, theme.radii.organic3];

const ProductsWrapper = styled.section`
  padding: 6rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  max-width: 640px;
  margin-bottom: 2.5rem;
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

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const FilterPill = styled.button<{ $active: boolean }>`
  padding: 0.55rem 1.25rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.glass};
  color: ${({ theme, $active }) => ($active ? "#fff" : theme.colors.text)};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.glassBorder)};
  backdrop-filter: blur(10px);
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

const Card = styled.div<{ $radius: string }>`
  border-radius: ${({ $radius }) => $radius};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  transition: transform 0.25s ease, border-radius 0.4s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImageFrame = styled.div`
  position: relative;
  height: 180px;
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
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
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

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <ProductsWrapper id="produtos">
      <SectionHeader>
        <Eyebrow>Catálogo</Eyebrow>
        <Title>Peças que carregam sua marca no dia a dia</Title>
      </SectionHeader>

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

      <Grid>
        {filteredProducts.map((product, index) => {
          const radius = radiusOptions[index % radiusOptions.length];
          return (
            <Card key={product.name} $radius={radius}>
              <ImageFrame>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </ImageFrame>
              <CardBody>
                <CategoryBadge>{product.category}</CategoryBadge>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </ProductsWrapper>
  );
}