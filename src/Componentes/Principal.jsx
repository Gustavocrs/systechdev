"use client";
import {AzulFundo} from "@/utils/cores";
import styled from "styled-components";

export const Principal = () => {
  return (
    <Container>
      <span>Em breve</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  color: #fff;
  /* margin-top: 30px; */
  background: url("modelo.svg") no-repeat center;
  background-size: 500px 500px;
  background-color: ${AzulFundo};

  span {
    position: relative;
    top: 300px;
    margin: 0 auto;
    font-size: 2rem;
    font-family: Cairo;
  }

  @media screen and (max-width: 600px) {
    background-size: 300px 300px;
  }
`;
