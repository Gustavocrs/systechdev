"use client";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <>
      <html lang="pt-br">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>{`<Systech Dev />`}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
