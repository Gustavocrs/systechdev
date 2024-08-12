"use client";
import styled from "styled-components";
import {Principal} from "@/Componentes/Principal";
import {Navbar} from "@/Componentes/Navbar";
import {AzulFundo} from "@/utils/cores";

export default function principal() {
  const NavAreas = [];
  const PrincipalAreas = {
    cor: AzulFundo,
    img: "modelo.svg",
  };

  return (
    <Container>
      <Navbar NavAreas={NavAreas} />
      <Principal bgimg={PrincipalAreas.img} bgcolor={PrincipalAreas.cor} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
