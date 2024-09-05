"use client";
import styled from "styled-components";
import {Principal} from "@/Componentes/Principal";
import {Navbar} from "@/Componentes/Navbar";
import {AzulFundo} from "@/utils/cores";

export default function Home() {
  const NavAreas = [{title: "Principal", href: "/"}];
  const PrincipalAreas = {
    cor: AzulFundo,
    img: "modelo.svg",
  };

  return (
    <>
      {/* <Navbar NavAreas={NavAreas} /> */}
      <Principal />
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  /* height: calc(100vh - 30px); */
  height: 100vh;
  /* margin-top: 30px; */
  background: url(${"modelo.svg"}) no-repeat center;
  background-size: 500px 500px;
  background-color: ${AzulFundo};
`;
