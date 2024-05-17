import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        {children}
      </body>
    </html>
  );
}
