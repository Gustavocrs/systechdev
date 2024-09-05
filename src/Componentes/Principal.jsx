"use client";
import {AzulFundo} from "@/utils/cores";
import styled from "styled-components";

export const Principal = () => {
  return <Div></Div>;
};

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  /* margin-top: 30px; */
  background: url("modelo.svg") no-repeat center;
  background-size: 500px 500px;
  background-color: ${AzulFundo};

  @media screen and (max-width: 600px) {
    background-size: 300px 300px;
  }
`;
