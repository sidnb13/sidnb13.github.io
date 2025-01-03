import type { Metadata } from "next";
import { Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";

// Initialize Lora font
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  // Optional: specify weights if you need specific ones
  // weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  weight: ["400"], // can add more weights if needed
});

export const metadata: Metadata = {
  title: "Sidharth Baskaran",
  description: "Research and software",
  openGraph: {
    title: "Sidharth Baskaran",
    description: "Research and software",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sidharth Baskaran",
    description: "Research and software",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body
        className={`${lora.className} bg-background dark:bg-dark-background text-primary-secondary dark:text-dark-secondary transition-colors duration-200`}
      >
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
