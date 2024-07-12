import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Providers } from '@/components/providers/Providers';
import { MainLayout } from '@/components/layout/MainLayout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galactic Realms",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
        </body>
    </html>
  );
}
