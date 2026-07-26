import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Merchandising Co. | Branding aplicado a produtos personalizados",
  description:
    "Desenvolvemos merchandising sob medida — do conceito à produção — para transformar identidade de marca em produtos que as pessoas usam e guardam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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