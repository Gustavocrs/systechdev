"use client";
import styled from "styled-components";
import {Principal} from "@/Pages/Principal";
import {Navbar} from "@/Pages/Navbar";
import {AzulFundo} from "@/utils/cores";
import {Button} from "@/Componentes/Button";
import {Servicos} from "@/Pages/Servicos";
import {FaleConosco} from "@/Pages/FaleConosco";

export default function Home() {
  const NavAreas = [
    {title: "Principal", href: "#principal"},
    {title: "Servicos", href: "#servicos"},
    {title: "FaleConosco", href: "#faleconosco"},
  ];

  return (
    <Container>
      {/* <Navbar NavAreas={NavAreas} /> */}
      <Principal id="principal" />
      <Servicos id="servicos" />
      <FaleConosco />
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  /* height: calc(100vh - 50px); */
  height: 100vh;
`;
