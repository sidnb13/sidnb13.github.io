import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidharth Baskaran",
  description: "Research. Engineering. Other things.",
  metadataBase: new URL("https://www.sidbaskaran.com"),
  openGraph: {
    title: "Sidharth Baskaran",
    description: "Research. Engineering. Other things.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sidharth Baskaran",
    description: "Research. Engineering. Other things.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
