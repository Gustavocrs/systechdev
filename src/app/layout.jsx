"use client";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="pt-br">
      <title>{`<Systech Dev />`}</title>
      <body>{children}</body>
    </html>
  );
}
