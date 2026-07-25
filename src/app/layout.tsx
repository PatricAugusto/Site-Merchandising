import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Merchandising Co. | Branding aplicado a produtos personalizados",
  description:
    "Desenvolvemos merchandising sob medida — do conceito à produção — para transformar identidade de marca em produtos que as pessoas usam e guardam.",
  keywords: [
    "merchandising personalizado",
    "brindes corporativos",
    "produtos personalizados",
    "branding",
  ],
  openGraph: {
    title: "Merchandising Co.",
    description: "Branding aplicado a produtos que carregam sua marca no dia a dia.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}