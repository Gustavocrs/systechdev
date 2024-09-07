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

          <meta property="og:title" content="< Systech Dev />" />
          <meta
            property="og:description"
            content="Empresa de desenvolvimento de sistemas web"
          />
          <meta property="og:url" content="http://systechdev.com.br/" />
          <meta
            property="og:image" content="http://raw.githubusercontent.com/Gustavocrs/systechdev/blob/master/public/favicon.svg"
          />
          <meta property="og:type" content="website" />

          <meta
            name="keywords"
            content="React, ReactJS, HTML5, HTML,CSS3, CSS, JavaScript"
          />
          <meta name="author" content="Systech Dev" />
          <title>{`<Systech Dev />`}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
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
