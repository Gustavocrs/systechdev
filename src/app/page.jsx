"use client";
import styled from "styled-components";
import {Principal} from "@/Componentes/Principal";

export default function Home() {
  return (
    <Container>
      <Principal />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("modelo.svg") no-repeat center;
  background-size: 500px 500px;
  background-color: #1b1b2a;
`;
