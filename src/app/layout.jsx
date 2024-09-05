"use client";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <>
      <html lang="pt-br">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{`<Systech Dev />`}</title>
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
