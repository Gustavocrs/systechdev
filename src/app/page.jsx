"use client";
import styled from "styled-components";
import {Principal} from "@/Pages/Principal";
import {Navbar} from "@/Pages/Navbar";
import {AzulFundo} from "@/utils/cores";
import {Button} from "@/Componentes/Button";
import {Servicos} from "@/Pages/Servicos";

export default function Home() {
  const NavAreas = [
    // {title: "Home", href: "/"},
    // {title: "Sobre", href: "/"},
    // {title: "Contato", href: "/"},
  ];

  return (
    <Container>
      {/* <Navbar NavAreas={NavAreas} /> */}
      <Principal />
      <Servicos />
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  /* height: calc(100vh - 50px); */
  height: 100vh;
`;
