import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lauzen | Portfólio",
  description: "Portfólio de Ladislau Piedoso Borges, desenvolvedor de software orientado ao negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
