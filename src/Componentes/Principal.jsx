"use client";
import {AzulFundo} from "@/utils/cores";
import styled from "styled-components";

export const Principal = ({bgimg, bgcolor}) => {
  const Div = styled.div`
    width: 100vw;
    height: calc(100vh - 30px);
    /* margin-top: 30px; */
    background: url(${bgimg ? bgimg : "modelo.svg"}) no-repeat center;
    background-size: 500px 500px;
    background-color: ${bgcolor ? bgcolor : AzulFundo};
  `;
  return <Div></Div>;
};
