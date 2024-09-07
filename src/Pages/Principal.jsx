"use client";
import {AzulFundo} from "@/utils/cores";
import styled from "styled-components";

export const Principal = () => {
  return <ContainerBanner>{/* <span>Em breve</span> */}</ContainerBanner>;
};

const ContainerBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  /* height: calc(100vh - 50px); */
  height: 100vh;
  color: #fff;
  background: url("modelo.svg") no-repeat;
  background-position: 50% 30%;
  background-size: 300px 300px;
  background-color: ${AzulFundo};

  span {
    position: relative;
    top: 250px;
    margin: 0 auto;
    font-size: 2rem;
    font-family: Cairo;
  }

  @media screen and (max-width: 600px) {
    top: 200px;
    background-size: 65% 65%;
  }
`;
