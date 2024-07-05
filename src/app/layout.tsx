import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidharth Baskaran",
  description: "my personal website",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: "url(/topo.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
        className="bg-zinc-100 dark:bg-zinc-900"
      >
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        {children}
      </body>
    </html>
  );
}
