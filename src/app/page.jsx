"use client";
import styled from "styled-components";
import {Principal} from "@/Componentes/Principal";
import {Navbar} from "@/Componentes/Navbar";
import {AzulFundo} from "@/utils/cores";

export default function Home() {
  const NavAreas = [
    // {title: "Home", href: "/"},
    // {title: "Sobre", href: "/"},
    // {title: "Contato", href: "/"},
  ];

  return (
    <Container>
      <Navbar NavAreas={NavAreas} />
      <Principal />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 30px);
  /* height: 100vh; */
  /* margin-top: 30px; */
`;
